'use client'

import { useState, useCallback } from 'react'
import { QUIZ_QUESTIONS, getRecommendation, type Recommendation } from '@/lib/quizLogic'
import { analytics } from '@/lib/analytics'

export default function QuizCard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [showResult, setShowResult] = useState(false)

  const totalSteps = 5
  const progress = showResult ? 100 : (currentStep / totalSteps) * 100

  const handleSelect = useCallback(
    (step: number, key: string) => {
      const newAnswers = { ...answers, [step]: key }
      setAnswers(newAnswers)
      analytics.quizStepCompleted(step, key)

      if (step < totalSteps) {
        // Auto-advance to next question
        setCurrentStep(step + 1)
      } else {
        // Last question — show result
        const rec = getRecommendation(newAnswers)
        setRecommendation(rec)
        setShowResult(true)
        analytics.quizCompleted(rec.primaryService, newAnswers)

        fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            answers: newAnswers,
            recommendation: rec.primaryService,
            completed: true,
          }),
        }).catch(() => {})
      }
    },
    [answers]
  )

  const retake = useCallback(() => {
    setCurrentStep(1)
    setAnswers({})
    setRecommendation(null)
    setShowResult(false)
  }, [])

  const currentQuestion = QUIZ_QUESTIONS[currentStep - 1]

  return (
    <div className="bg-[#333537] border border-[#3a4a3f] p-10 md:p-12 relative">
      {/* Progress header */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-[#3a4a3f]">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#6b6b63]">
          Question <span className="text-[#00ffa3]">{showResult ? totalSteps : currentStep}</span> of{' '}
          {totalSteps}
        </div>
        <div className="flex-1 mx-6 h-[2px] bg-[#3a4a3f]/40 overflow-hidden">
          <div
            className="h-full bg-[#00ffa3] shadow-[0_0_12px_#00ffa3] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#6b6b63]">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Question steps */}
      {!showResult && currentQuestion && (
        <div className="animate-[fadeIn_0.4s_ease]" key={currentStep}>
          <h3 className="text-2xl md:text-3xl font-headline font-semibold mb-2 tracking-tight">
            {currentQuestion.question}
          </h3>
          <p className="text-[#a8a89f] text-sm mb-8">{currentQuestion.hint}</p>
          <div
            className={`grid grid-cols-1 gap-3 ${
              currentQuestion.options.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            }`}
          >
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleSelect(currentStep, opt.key)}
                className="flex items-center gap-4 p-5 bg-[#121416] border border-[#3a4a3f] hover:border-[#00ffa3] hover:bg-[#00ffa3]/5 transition-all group text-left cursor-pointer"
              >
                <span className="font-mono text-[11px] w-6 h-6 border border-[#3a4a3f] rounded flex items-center justify-center text-[#6b6b63] group-hover:border-[#00ffa3] group-hover:text-[#00ffa3] transition-colors flex-shrink-0">
                  {opt.letter}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#f5f5f0]">{opt.label}</div>
                  <div className="font-mono text-[10px] text-[#6b6b63] uppercase tracking-wider mt-0.5">
                    {opt.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result panel */}
      {showResult && recommendation && (
        <div className="animate-[fadeIn_0.4s_ease]">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-7 bg-[#00ffa3] rounded-full flex items-center justify-center text-[#002111] font-black text-sm">
              &#10003;
            </span>
            <span className="font-mono text-[11px] text-[#00ffa3] tracking-wider uppercase font-semibold">
              Your match
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-3">
            {recommendation.title}
          </h3>
          <p className="text-[#a8a89f] text-base leading-relaxed mb-7 max-w-xl">
            {recommendation.reasoning}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-8 p-1 bg-[#3a4a3f]/20">
            <div className="bg-[#121416] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                Monthly cost
              </div>
              <div className="font-headline text-xl font-bold">
                {recommendation.cost}
                <span className="text-xs text-[#6b6b63] font-normal">/mo</span>
              </div>
            </div>
            <div className="bg-[#121416] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                Setup time
              </div>
              <div className="font-headline text-xl font-bold">{recommendation.setup}</div>
            </div>
            <div className="bg-[#121416] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                Free trial
              </div>
              <div className="font-headline text-xl font-bold">{recommendation.trial}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={recommendation.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ffa3] text-[#002111] px-7 py-4 rounded font-bold hover:translate-y-[-2px] transition-all inline-flex items-center gap-2 no-underline"
            >
              Start free trial at {recommendation.brand} <span>&rarr;</span>
            </a>
            <button
              type="button"
              onClick={retake}
              className="border border-[#3a4a3f] px-7 py-4 rounded font-semibold hover:border-[#00ffa3] hover:text-[#00ffa3] transition-all cursor-pointer bg-transparent text-[#f5f5f0]"
            >
              Retake quiz
            </button>
          </div>

          <p className="text-[11px] text-[#6b6b63] mt-6 leading-[1.5]">
            Note: PayrollPicker earns a commission if you sign up through our links, at no extra cost
            to you.
          </p>
        </div>
      )}
    </div>
  )
}
