export default function ServiceStrip() {
  return (
    <section className="py-14 bg-[#1a1c1e] border-y border-[#3a4a3f]/20">
      <div className="max-w-7xl mx-auto px-8">
        <p className="font-mono text-[10px] text-center mb-8 tracking-[0.2em] uppercase text-[#6b6b63]">
          &#9670; The 6 providers that win 94% of small business payroll searches
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <span className="text-xl font-bold font-headline">Gusto</span>
          <span className="text-xl font-bold font-headline">QuickBooks</span>
          <span className="text-xl font-bold font-headline">OnPay</span>
          <span className="text-xl font-bold font-headline">ADP RUN</span>
          <span className="text-xl font-bold font-headline">Rippling</span>
          <span className="text-xl font-bold font-headline">Patriot</span>
        </div>
      </div>
    </section>
  )
}
