'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-[#3a4a3f]/20 shadow-[0_40px_40px_-15px_rgba(0,255,163,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#f5f5f0] font-headline flex items-center gap-2 no-underline">
          <span className="w-7 h-7 bg-[#00ffa3] rounded flex items-center justify-center text-[#002111] font-black text-sm">
            P
          </span>
          PayrollPicker<span className="text-[#00ffa3]">.com</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 font-headline text-[15px] tracking-tight">
          <a className="text-[#f5f5f0] hover:text-[#00ffa3] transition-colors" href="#quiz">
            Take the quiz
          </a>
          <a className="text-[#f5f5f0] hover:text-[#00ffa3] transition-colors" href="#compare">
            Top picks
          </a>
          <a className="text-[#f5f5f0] hover:text-[#00ffa3] transition-colors" href="#services">
            Why us
          </a>
          <a className="text-[#f5f5f0] hover:text-[#00ffa3] transition-colors" href="#faq">
            FAQ
          </a>
        </div>
        <a
          href="#quiz"
          className="bg-[#00ffa3] text-[#002111] px-6 py-2.5 rounded font-bold hover:translate-y-[-2px] transition-all active:scale-95 duration-150 text-[14px] no-underline"
        >
          Take the quiz &rarr;
        </a>
      </div>
    </nav>
  )
}
