export default function WhyUs() {
  return (
    <section id="why" className="py-32 bg-[#1a1c1e]/50 border-y border-[#3a4a3f]/20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8 leading-[1.05] tracking-tighter">
            Payroll is the second most{' '}
            <span className="font-serif-italic font-normal text-[#00ffa3]">frustrating</span> thing
            small business owners deal with.
          </h2>
          <p className="text-lg text-[#a8a89f] mb-6 leading-relaxed">
            Every &ldquo;best payroll software&rdquo; review online is written by someone who has never
            run payroll for their own company. They list the same five tools in the same order, then
            collect affiliate commissions.
          </p>
          <p className="text-lg text-[#a8a89f] mb-10 leading-relaxed">
            PayrollPicker is different. We ask five real questions, match you to one of six proven
            providers, and tell you the honest tradeoffs. If we think Gusto is best for you, we say
            Gusto. If it&apos;s Patriot, we say Patriot. Simple.
          </p>
          <div className="space-y-5">
            <div className="flex gap-5 items-start">
              <div className="bg-[#00ffa3]/15 p-2.5 border border-[#00ffa3]/30 rounded flex-shrink-0">
                <span className="material-symbols-outlined text-[#00ffa3] text-xl">verified</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Honest matching</h4>
                <p className="text-[#a8a89f] text-sm">
                  We recommend based on fit, not commission. The highest-paying affiliate isn&apos;t
                  always our top pick.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-[#00ffa3]/15 p-2.5 border border-[#00ffa3]/30 rounded flex-shrink-0">
                <span className="material-symbols-outlined text-[#00ffa3] text-xl">calculate</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Real pricing, no surprises</h4>
                <p className="text-[#a8a89f] text-sm">
                  We show you the actual monthly cost for your exact team size. No &ldquo;starting
                  at&rdquo; games.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staggered stats grid */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-[#333537] p-7 border border-[#3a4a3f] aspect-square flex flex-col justify-between">
            <p className="font-headline text-5xl font-bold text-[#00ffa3] tracking-tighter">50%</p>
            <div>
              <p className="text-sm font-semibold leading-snug mb-2">
                spend 3+ hours per month administering payroll taxes
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#6b6b63]">
                NSBA 2025 Survey
              </p>
            </div>
          </div>
          <div className="bg-[#1a1c1e] p-7 border border-[#3a4a3f] aspect-square flex flex-col justify-between mt-12">
            <p className="font-headline text-5xl font-bold text-[#4ac5ff] tracking-tighter">53%</p>
            <div>
              <p className="text-sm font-semibold leading-snug mb-2">
                have been hit with payroll compliance penalties in the last 5 years
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#6b6b63]">
                G2 Payroll 2025
              </p>
            </div>
          </div>
          <div className="bg-[#1a1c1e] p-7 border border-[#3a4a3f] aspect-square flex flex-col justify-between -mt-12">
            <p className="font-headline text-5xl font-bold text-[#00ffa3] tracking-tighter">$2k+</p>
            <div>
              <p className="text-sm font-semibold leading-snug mb-2">
                spent annually on payroll services — choosing wrong is expensive
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#6b6b63]">
                SSR Report 2026
              </p>
            </div>
          </div>
          <div className="bg-[#333537] p-7 border border-[#3a4a3f] aspect-square flex flex-col justify-between">
            <p className="font-headline text-5xl font-bold text-[#00ffa3] tracking-tighter">6</p>
            <div>
              <p className="text-sm font-semibold leading-snug mb-2">
                providers compared fairly and transparently — no hidden rankings
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#6b6b63]">
                Our promise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
