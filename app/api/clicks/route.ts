import { trackAffiliateClick } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { sessionId, service, placement, recommendationMatch } = await req.json()

    await trackAffiliateClick({
      sessionId,
      service,
      placement,
      recommendationMatch: recommendationMatch ?? false,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Click tracking error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
