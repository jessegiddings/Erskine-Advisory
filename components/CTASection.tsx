export default function CTASection() {
  return (
    <section className="py-36 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffa3]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold mb-10 tracking-tighter leading-[0.95]">
          Your payroll software is{' '}
          <span className="font-serif-italic font-normal text-[#00ffa3]">waiting.</span>
        </h2>
        <p className="text-xl text-[#a8a89f] mb-12 max-w-xl mx-auto leading-relaxed">
          Take the 60-second quiz. Get an honest match. Start a free trial with the provider that
          actually fits. No email, no spam, no sales calls.
        </p>
        <a
          href="#quiz"
          className="inline-flex items-center gap-3 bg-[#00ffa3] text-[#002111] px-10 py-5 rounded font-bold text-lg hover:translate-y-[-3px] transition-all shadow-xl shadow-[#00ffa3]/20 no-underline"
        >
          Take the 60-second quiz <span>&rarr;</span>
        </a>
      </div>
    </section>
  )
}
