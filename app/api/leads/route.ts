import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, sessionId } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
    }

    // TODO: Wire up Resend for email nurture sequences in Phase 2
    // For now, just log the lead
    console.log('Lead captured:', { email, sessionId })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Leads API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to capture lead' }, { status: 500 })
  }
}
