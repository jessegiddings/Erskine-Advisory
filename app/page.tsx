import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ServiceStrip from '@/components/ServiceStrip'
import QuizCard from '@/components/QuizCard'
import ServiceCards from '@/components/ServiceCards'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import FormRightCrossLink from '@/components/FormRightCrossLink'
import CTASection from '@/components/CTASection'
import ChatWidget from '@/components/ChatWidget'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServiceStrip />

      {/* Quiz Section */}
      <section className="py-32 px-8 bg-[#1a1c1e]/30" id="quiz">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] text-[#00ffa3] tracking-[0.2em] uppercase mb-4">
              &#9670; The PayrollPicker quiz
            </p>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[0.95]">
              Five questions. One{' '}
              <span className="font-serif-italic font-normal text-[#00ffa3]">honest</span>{' '}
              recommendation.
            </h2>
          </div>
          <QuizCard />
        </div>
      </section>

      <ServiceCards />
      <WhyUs />
      <FAQ />
      <FormRightCrossLink />
      <CTASection />
      <ChatWidget />
      <Footer />
    </>
  )
}
