import { createAnthropicClient, SYSTEM_PROMPT } from '@/lib/claude'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { reply: "Chat is currently unavailable. Please try the quiz instead!" },
        { status: 200 }
      )
    }

    const client = createAnthropicClient()

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    const textBlock = response.content.find(block => block.type === 'text')
    return NextResponse.json({ reply: textBlock?.text || 'Sorry, I could not generate a response.' })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { reply: "I'm having trouble connecting right now. Try the quiz for an instant recommendation!" },
      { status: 200 }
    )
  }
}
