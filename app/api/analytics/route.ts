import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')

  if (!key || key !== process.env.ANALYTICS_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Quiz completion stats
    const { data: allSessions } = await supabase
      .from('quiz_sessions')
      .select('id, completed, recommendation, created_at, utm_source, utm_campaign')

    const sessions = allSessions || []
    const total = sessions.length
    const completed = sessions.filter(s => s.completed).length
    const completionRate = total > 0 ? Math.round((completed / total) * 1000) / 10 : 0

    // Recommendation distribution
    const recDist: Record<string, number> = {}
    sessions.filter(s => s.completed && s.recommendation).forEach(s => {
      recDist[s.recommendation] = (recDist[s.recommendation] || 0) + 1
    })

    // UTM source breakdown
    const utmDist: Record<string, number> = {}
    sessions.forEach(s => {
      const src = s.utm_source || 'direct'
      utmDist[src] = (utmDist[src] || 0) + 1
    })

    // Click stats
    const { data: allClicks } = await supabase
      .from('affiliate_clicks')
      .select('id, service, placement, recommendation_match, created_at')

    const clicks = allClicks || []

    // Clicks by service
    const clicksByService: Record<string, number> = {}
    clicks.forEach(c => {
      clicksByService[c.service] = (clicksByService[c.service] || 0) + 1
    })

    // Clicks by placement
    const clicksByPlacement: Record<string, number> = {}
    clicks.forEach(c => {
      clicksByPlacement[c.placement] = (clicksByPlacement[c.placement] || 0) + 1
    })

    // Recommendation match rate
    const matchClicks = clicks.filter(c => c.recommendation_match).length
    const matchRate = clicks.length > 0 ? Math.round((matchClicks / clicks.length) * 1000) / 10 : 0

    // Daily sessions (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const daily: Record<string, { started: number; completed: number; clicks: number }> = {}

    sessions.forEach(s => {
      const day = new Date(s.created_at).toISOString().split('T')[0]
      if (!daily[day]) daily[day] = { started: 0, completed: 0, clicks: 0 }
      daily[day].started++
      if (s.completed) daily[day].completed++
    })

    clicks.forEach(c => {
      const day = new Date(c.created_at).toISOString().split('T')[0]
      if (!daily[day]) daily[day] = { started: 0, completed: 0, clicks: 0 }
      daily[day].clicks++
    })

    return NextResponse.json({
      quiz: {
        total,
        completed,
        completionRate,
        recommendationDistribution: recDist,
        utmSources: utmDist,
      },
      clicks: {
        total: clicks.length,
        byService: clicksByService,
        byPlacement: clicksByPlacement,
        recommendationMatchRate: matchRate,
      },
      daily,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
