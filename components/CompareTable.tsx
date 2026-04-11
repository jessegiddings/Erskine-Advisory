export default function CompareTable() {
  return (
    <section className="py-[60px] md:py-[100px] px-6 md:px-12 bg-paper border-t border-border" id="compare">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-green mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-0.5 bg-green" />
          Side by Side
        </div>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] text-dark mb-4">
          The honest <em className="italic text-green">comparison</em>
        </h2>
        <p className="text-base text-warm-gray leading-[1.65] mb-10 max-w-[520px]">
          We earn affiliate commissions from some of these services — so we have every incentive to recommend the most expensive ones. We don&apos;t. Here&apos;s the real breakdown.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border shadow-[0_4px_24px_var(--shadow)]">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-paper border-b border-border">
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-warm-gray">Feature</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-green bg-green-light border-t-[3px] border-t-green">ZenBusiness ★</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-warm-gray">Northwest</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-warm-gray">LegalZoom</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-warm-gray">Bizee</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold tracking-[0.06em] uppercase text-warm-gray">Rocket Lawyer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Starting price</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><strong>$0</strong> + state fees</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">$39 + state fees</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">$0 + state fees</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><strong>$0</strong> + state fees</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">$99.99 + state fees</td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Free registered agent (yr 1)</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><span className="text-green text-base">✓</span> Included</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Included</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span> $299/yr</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Included</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span> Add-on</td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Filing speed</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]">3–5 days (Rush: 1 day)</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">Same day</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">3–5 days</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">1–2 days</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border">3–5 days</td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Trustpilot rating</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-xl text-[12px] font-bold bg-green-light text-green">4.8 ★</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-xl text-[12px] font-bold bg-green-light text-green">4.9 ★</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-xl text-[12px] font-bold bg-green-light text-green">4.6 ★</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-xl text-[12px] font-bold bg-green-light text-green">4.7 ★</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-xl text-[12px] font-bold bg-amber-light text-amber">3.9 ★</span></td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Privacy protection</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><span className="text-amber text-[13px] font-semibold">Partial</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Best in class</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-amber text-[13px] font-semibold">Partial</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span></td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Attorney access</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><span className="text-amber text-[13px] font-semibold">Add-on</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Best in class</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-[#C0392B] text-base">✗</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Included</td>
              </tr>
              <tr className="hover:bg-cream/80">
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink border-b border-border">Annual compliance alerts</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border bg-green/[0.04]"><span className="text-green text-base">✓</span> Included</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-green text-base">✓</span> Included</td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-amber text-[13px] font-semibold">Paid</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-amber text-[13px] font-semibold">Paid</span></td>
                <td className="px-5 py-3.5 text-[13px] text-medium border-b border-border"><span className="text-amber text-[13px] font-semibold">Paid</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 text-[13px] font-medium text-ink">Best for</td>
                <td className="px-5 py-3.5 text-[13px] text-medium bg-green/[0.04]">Most people</td>
                <td className="px-5 py-3.5 text-[13px] text-medium">Privacy-first</td>
                <td className="px-5 py-3.5 text-[13px] text-medium">Legal needs</td>
                <td className="px-5 py-3.5 text-[13px] text-medium">Budget</td>
                <td className="px-5 py-3.5 text-[13px] text-medium">Ongoing legal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
