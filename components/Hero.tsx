export default function Hero() {
  return (
    <section className="relative min-h-[860px] flex items-center overflow-hidden px-8 max-w-7xl mx-auto pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full">
        {/* Headline Side */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 font-mono text-[#00ffa3] text-[11px] tracking-[0.15em] mb-8 uppercase border border-[#00ffa3]/30 bg-[#00ffa3]/5 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 bg-[#00ffa3] rounded-full animate-pulse shadow-[0_0_8px_#00ffa3]" />
            LIVE &middot; 60-second quiz &middot; No email required
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-[0.9] tracking-tighter mb-8">
            Stop{' '}
            <span className="line-through decoration-[#ff6b3d]/80 decoration-[3px] text-[#6b6b63]">
              guessing
            </span>{' '}
            which payroll{' '}
            <span className="font-serif-italic font-normal text-[#00ffa3]">actually fits</span>.
          </h1>
          <p className="text-lg text-[#a8a89f] max-w-xl mb-10 leading-relaxed">
            Every &ldquo;best payroll software&rdquo; article online recommends the same five tools in
            the same order. We built a real quiz that matches you to the right one based on what you
            actually need &mdash; price, ease, contractor mix, and growth plans.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#quiz"
              className="bg-[#00ffa3] text-[#002111] px-8 py-4 rounded font-bold text-base hover:bg-[#00e290] hover:translate-y-[-2px] transition-all inline-flex items-center gap-2 no-underline"
            >
              Take the 60-second quiz <span>&rarr;</span>
            </a>
            <a
              href="#compare"
              className="border border-[#3a4a3f] px-8 py-4 rounded font-semibold text-base text-[#f5f5f0] hover:border-[#00ffa3] hover:text-[#00ffa3] transition-all inline-flex items-center no-underline"
            >
              Or skip to picks
            </a>
          </div>
          {/* Trust stats */}
          <div className="mt-12 pt-8 border-t border-[#3a4a3f]/30 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="font-headline text-3xl font-bold tracking-tight">
                60<span className="text-[#00ffa3]">s</span>
              </div>
              <div className="text-xs text-[#a8a89f] mt-1">Average quiz time</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold tracking-tight">6</div>
              <div className="text-xs text-[#a8a89f] mt-1">Providers compared</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold tracking-tight">$0</div>
              <div className="text-xs text-[#a8a89f] mt-1">No email gate</div>
            </div>
          </div>
        </div>

        {/* Tilted Price Card */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00ffa3]/10 rounded-full blur-[120px]" />
          <div className="bg-[#282a2c] border border-[#3a4a3f] p-7 transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl relative z-10">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#3a4a3f]">
              <span className="font-mono text-[10px] uppercase text-[#6b6b63] tracking-wider">
                5-person S-corp &middot; CA
              </span>
              <span className="bg-[#00ffa3] text-[#002111] text-[9px] font-mono font-bold px-2 py-1 uppercase tracking-wider">
                Match
              </span>
            </div>
            <div className="space-y-1">
              {/* ADP */}
              <div className="flex justify-between items-end py-3 border-b border-[#3a4a3f]/40">
                <div>
                  <div className="font-semibold text-[15px]">ADP RUN</div>
                  <div className="font-mono text-[10px] uppercase text-[#6b6b63] tracking-wider mt-0.5">
                    Enterprise payroll
                  </div>
                </div>
                <p className="text-lg font-bold font-mono">
                  $119<span className="text-[10px] text-[#6b6b63]">/mo</span>
                </p>
              </div>
              {/* Gusto — highlighted */}
              <div className="flex justify-between items-end bg-[#00ffa3]/10 border-l-[3px] border-[#00ffa3] -mx-7 px-7 py-3.5 my-1">
                <div>
                  <div className="font-semibold text-[15px] text-[#00ffa3]">
                    Gusto Core{' '}
                    <span className="font-mono text-[9px] tracking-wider ml-2">&#9733; YOUR MATCH</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase text-[#00ffa3]/70 tracking-wider mt-0.5">
                    Full-service + benefits
                  </div>
                </div>
                <p className="text-lg font-bold font-mono text-[#00ffa3]">
                  $75<span className="text-[10px]">/mo</span>
                </p>
              </div>
              {/* QuickBooks */}
              <div className="flex justify-between items-end py-3 border-b border-[#3a4a3f]/40">
                <div>
                  <div className="font-semibold text-[15px]">QuickBooks Payroll</div>
                  <div className="font-mono text-[10px] uppercase text-[#6b6b63] tracking-wider mt-0.5">
                    If you use QBO already
                  </div>
                </div>
                <p className="text-lg font-bold font-mono">
                  $85<span className="text-[10px] text-[#6b6b63]">/mo</span>
                </p>
              </div>
              {/* OnPay */}
              <div className="flex justify-between items-end py-3 border-b border-[#3a4a3f]/40">
                <div>
                  <div className="font-semibold text-[15px]">OnPay</div>
                  <div className="font-mono text-[10px] uppercase text-[#6b6b63] tracking-wider mt-0.5">
                    Simple &middot; flat rate
                  </div>
                </div>
                <p className="text-lg font-bold font-mono">
                  $60<span className="text-[10px] text-[#6b6b63]">/mo</span>
                </p>
              </div>
              {/* Patriot */}
              <div className="flex justify-between items-end py-3">
                <div>
                  <div className="font-semibold text-[15px]">Patriot</div>
                  <div className="font-mono text-[10px] uppercase text-[#6b6b63] tracking-wider mt-0.5">
                    Cheapest full-service
                  </div>
                </div>
                <p className="text-lg font-bold font-mono">
                  $37<span className="text-[10px] text-[#6b6b63]">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
