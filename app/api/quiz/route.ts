import { saveQuizSession } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { answers, recommendation, completed, utmSource, utmCampaign, utmTerm, referrer } = body

    const sessionId = await saveQuizSession({
      answers,
      recommendation,
      completed,
      utmSource,
      utmCampaign,
      utmTerm,
      referrer,
    })

    return NextResponse.json({ success: true, sessionId })
  } catch (error) {
    console.error('Quiz API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to save quiz data' }, { status: 500 })
  }
}
