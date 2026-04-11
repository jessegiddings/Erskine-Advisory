import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-[#3a4a3f]/30 bg-[#0b0d0f]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-[#f5f5f0] mb-3 font-headline flex items-center gap-2 no-underline">
              <span className="w-6 h-6 bg-[#00ffa3] rounded flex items-center justify-center text-[#002111] font-black text-xs">
                P
              </span>
              PayrollPicker<span className="text-[#00ffa3]">.com</span>
            </Link>
            <p className="text-sm text-[#a8a89f] max-w-xs leading-relaxed mt-3">
              Find the right payroll software in 60 seconds. Honest recommendations, no email gates, no spam.
            </p>
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-[10px] text-[#6b6b63] mb-5">Compare</p>
            <ul className="space-y-3 list-none">
              <li><Link href="/reviews/gusto-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Gusto review</Link></li>
              <li><Link href="/reviews/onpay-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">OnPay review</Link></li>
              <li><Link href="/reviews/quickbooks-payroll-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">QuickBooks Payroll</Link></li>
              <li><Link href="/reviews/patriot-payroll-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Patriot Payroll</Link></li>
              <li><Link href="/reviews/rippling-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Rippling review</Link></li>
              <li><Link href="/reviews/adp-run-review" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">ADP RUN review</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-[10px] text-[#6b6b63] mb-5">Guides</p>
            <ul className="space-y-3 list-none">
              <li><Link href="/guides/payroll-for-s-corp-owners" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Payroll for S-corps</Link></li>
              <li><Link href="/guides/1099-vs-w2" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">1099 vs W2</Link></li>
              <li><Link href="/guides/multi-state-payroll" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Multi-state payroll</Link></li>
              <li><Link href="/guides/first-employee-checklist" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">First hire checklist</Link></li>
              <li><Link href="/guides/switching-payroll-providers" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Switching providers</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-[10px] text-[#6b6b63] mb-5">Company</p>
            <ul className="space-y-3 list-none">
              <li><a href="#" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">About</a></li>
              <li><a href="#" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">How we rank</a></li>
              <li><a href="https://formright.ai" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">FormRight &#8599;</a></li>
              <li><a href="#" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Privacy</a></li>
              <li><a href="#" className="text-sm text-[#a8a89f] hover:text-[#00ffa3] transition-colors no-underline">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-[#3a4a3f]/30 text-xs text-[#a8a89f] leading-relaxed max-w-4xl mb-6">
          <strong className="text-[#f5f5f0]">Affiliate disclosure:</strong> PayrollPicker receives commission when readers sign up with providers through our links. This never affects our recommendations &mdash; we match you to the best fit for your situation, not the highest-paying program. We only recommend providers we&apos;d use ourselves.
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-[#3a4a3f]/30 font-mono text-[10px] uppercase tracking-widest text-[#6b6b63]">
          <div>&copy; 2026 PayrollPicker.com</div>
          <div>Built in California &middot; Independent &middot; Honest</div>
        </div>
      </div>
    </footer>
  )
}
