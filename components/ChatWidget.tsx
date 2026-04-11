'use client'

import { useState, useRef, useEffect } from 'react'
import { analytics } from '@/lib/analytics'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hey — I'm here to help you figure out which payroll software fits your business. Ask me anything, or tap one of the quick questions below.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const [usedQRs, setUsedQRs] = useState<Set<string>>(new Set())
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    analytics.chatMessageSent(newMessages.filter((m) => m.role === 'user').length)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm having trouble connecting. Try the quiz for an instant recommendation!",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQR = (text: string) => {
    setUsedQRs((prev) => new Set(prev).add(text))
    sendMessage(text)
  }

  const quickReplies = [
    'Cheapest payroll for a 1-person S-corp?',
    'Gusto vs QuickBooks Payroll?',
    'Can I switch mid-year?',
    'What about 1099 contractors only?',
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[800]">
      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] bg-[#1a1c1e] border border-[#3a4a3f] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-[#282a2c] p-4 border-b border-[#3a4a3f] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00ffa3] animate-pulse shadow-[0_0_8px_#00ffa3]" />
              <span className="font-semibold text-sm">PayrollPicker Assistant</span>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#6b6b63]">
              Online
            </span>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 p-4 flex flex-col gap-3 max-h-[300px] min-h-[200px] overflow-y-auto"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                  msg.role === 'assistant'
                    ? 'bg-[#282a2c] border border-[#3a4a3f] self-start'
                    : 'bg-[#00ffa3] text-[#002111] font-semibold self-end'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-[#282a2c] border border-[#3a4a3f] self-start max-w-[85%] p-3 text-sm text-[#a8a89f]">
                Thinking...
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-2 p-3 border-t border-[#3a4a3f] bg-[#282a2c]">
            {quickReplies
              .filter((qr) => !usedQRs.has(qr))
              .map((qr) => (
                <button
                  key={qr}
                  type="button"
                  onClick={() => handleQR(qr)}
                  className="text-xs px-3 py-2 bg-[#121416] border border-[#3a4a3f] rounded-full hover:border-[#00ffa3] hover:text-[#00ffa3] transition-all cursor-pointer text-[#f5f5f0]"
                >
                  {qr}
                </button>
              ))}
          </div>

          {/* Input */}
          <div className="flex gap-3 p-3 border-t border-[#3a4a3f]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Type your payroll question..."
              className="flex-1 bg-[#121416] border border-[#3a4a3f] rounded px-4 py-3 text-sm outline-none focus:border-[#00ffa3] transition-colors text-[#f5f5f0] placeholder:text-[#6b6b63]"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              className="bg-[#00ffa3] text-[#002111] px-4 py-3 rounded font-bold text-sm cursor-pointer hover:bg-[#00e290] transition-colors flex-shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => {
          if (!isOpen) analytics.chatOpened()
          setIsOpen(!isOpen)
          setShowBadge(false)
        }}
        className="w-[52px] h-[52px] bg-[#00ffa3] border-none rounded-full cursor-pointer flex items-center justify-center shadow-[0_4px_20px_rgba(0,255,163,0.35)] hover:bg-[#00e290] hover:scale-[1.06] transition-all relative"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#002111">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        {showBadge && (
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#ff6b3d] rounded-full border-2 border-[#0b0d0f] text-[8px] flex items-center justify-center text-white font-bold">
            1
          </div>
        )}
      </button>
    </div>
  )
}
