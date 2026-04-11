'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "What's the cheapest payroll service that still files my taxes?",
    a: "Patriot Payroll's Full Service plan is the cheapest option that still handles your federal, state, and local tax filings. It starts at $37/month plus $4 per employee. OnPay is a close second at $40 base + $6 per person, with a more modern interface. Anything cheaper than Patriot usually means you're filing your own taxes — which defeats the purpose.",
  },
  {
    q: 'I only pay 1099 contractors. Do I even need payroll software?',
    a: "Technically no — you can cut checks manually and issue 1099s at year end. But once you have more than two contractors, you'll want something that handles the 1099 filing automatically. Gusto has a contractor-only plan at $35/month + $6/contractor. Patriot has a contractor package that's even cheaper.",
  },
  {
    q: 'Can I switch payroll providers mid-year?',
    a: "Yes, and it's easier than you think. Good payroll providers (Gusto, OnPay, QuickBooks Payroll) will help you migrate your YTD data for free and file a clean W-2 at year end covering the full year. The best time to switch is at the start of a quarter, but any time works.",
  },
  {
    q: "What's the difference between Gusto and QuickBooks Payroll?",
    a: "They're both excellent. The deciding factor is what accounting software you already use. If you're on QuickBooks Online, QuickBooks Payroll is the obvious pick — zero-touch sync, same company, same login. If you're on Xero, FreshBooks, or nothing yet, Gusto wins on ease of use, benefits, and HR features.",
  },
  {
    q: "Why not just use ADP? They're the biggest.",
    a: "ADP is the biggest because they dominated the space for 70 years before modern competitors existed. For small businesses under 15 employees, ADP is usually overkill and overpriced — Gusto, OnPay, or QuickBooks Payroll will serve you better. ADP RUN genuinely shines once you hit 15+ employees.",
  },
  {
    q: 'Is this site free? How do you make money?',
    a: "Yes, PayrollPicker is completely free and doesn't require an email. We earn a commission when you sign up with a provider through our links — but only if we actually recommended them. Our recommendations are based on honest fit, not who pays the highest affiliate rate.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section
      id="faq"
      className="py-32 px-8 bg-[#1a1c1e]/50 border-y border-[#3a4a3f]/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-20">
        <div>
          <h2 className="text-5xl font-headline font-bold tracking-tighter leading-[1] mb-6">
            Common{' '}
            <span className="font-serif-italic font-normal text-[#00ffa3]">questions.</span>
          </h2>
          <p className="text-[#a8a89f] leading-relaxed">
            The things first-time payroll buyers always ask. Written in plain English, not sales
            copy.
          </p>
        </div>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-t border-[#3a4a3f] py-6 cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold pr-4">{faq.q}</h4>
                <span
                  className={`text-[#00ffa3] text-2xl font-light transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                  paddingTop: openIndex === i ? '1rem' : '0',
                }}
              >
                <div className="text-[#a8a89f] text-sm leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
          {/* Bottom border on last item */}
          <div className="border-t border-[#3a4a3f]" />
        </div>
      </div>
    </section>
  )
}
