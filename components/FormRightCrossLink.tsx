export default function FormRightCrossLink() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#4ac5ff]/5 border border-[#4ac5ff]/30 p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ac5ff]/10 rounded-full blur-[120px] -mr-32 -mt-32" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <div className="w-16 h-16 bg-[#4ac5ff]/15 border border-[#4ac5ff]/40 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#4ac5ff] text-3xl">bolt</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#4ac5ff] uppercase tracking-widest mb-3 block">
                Sister site &middot; FormRight
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-2 tracking-tight">
                Haven&apos;t formed your business yet?{' '}
                <span className="font-serif-italic font-normal text-[#4ac5ff]">
                  Start there first.
                </span>
              </h3>
              <p className="text-[#a8a89f] max-w-2xl leading-relaxed">
                You need an LLC or S-corp before payroll makes sense. Our sister site FormRight will
                match you to the right formation service in 60 seconds &mdash; same honest quiz
                mechanic, different question set.
              </p>
            </div>
            <a
              href="https://formright.ai?from=payrollpicker"
              className="bg-transparent border border-[#4ac5ff] text-[#4ac5ff] px-7 py-4 rounded font-bold hover:bg-[#4ac5ff] hover:text-[#0b0d0f] transition-all whitespace-nowrap inline-flex items-center gap-2 no-underline"
            >
              Visit FormRight <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
