// Unified analytics — fires to GA4 + PostHog when configured

type EventProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    posthog?: {
      capture: (event: string, properties?: EventProperties) => void
      identify: (id: string, properties?: EventProperties) => void
    }
  }
}

export function trackEvent(name: string, properties?: EventProperties) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, properties)
  }

  // PostHog
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(name, properties)
  }
}

// Pre-defined events for type safety
export const analytics = {
  quizStarted: () =>
    trackEvent('quiz_started'),

  quizStepCompleted: (step: number, answer: string) =>
    trackEvent('quiz_step_completed', { step, answer }),

  quizCompleted: (recommendation: string, answers: Record<number, string>) =>
    trackEvent('quiz_completed', {
      recommendation,
      answer_1: answers[1],
      answer_2: answers[2],
      answer_3: answers[3],
      answer_4: answers[4],
      answer_5: answers[5],
    }),

  affiliateClick: (service: string, placement: string, isRecommendation: boolean) =>
    trackEvent('affiliate_click', { service, placement, is_recommendation: isRecommendation }),

  chatOpened: () =>
    trackEvent('chat_opened'),

  chatMessageSent: (messageCount: number) =>
    trackEvent('chat_message_sent', { message_count: messageCount }),

  ctaClicked: (location: string) =>
    trackEvent('cta_clicked', { location }),
}
