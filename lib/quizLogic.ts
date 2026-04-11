import { AFFILIATE_LINKS } from './affiliateLinks'

export interface QuizState {
  currentStep: number
  answers: Record<number, string>
  isComplete: boolean
  recommendation: Recommendation | null
}

export interface Recommendation {
  primaryService: string
  primaryUrl: string
  brand: string
  title: string
  subtitle: string
  reasoning: string
  cost: string
  setup: string
  trial: string
}

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Who are you paying right now?',
    hint: "This is the biggest driver of which software fits.",
    options: [
      { key: 'contractors', letter: 'A', label: 'Contractors only (1099s)', desc: 'Freelancers, agencies' },
      { key: 'w2', letter: 'B', label: 'W2 employees only', desc: 'Traditional payroll' },
      { key: 'mix', letter: 'C', label: 'Mix of W2 and contractors', desc: 'Most common' },
      { key: 'self', letter: 'D', label: 'Just myself (S-corp owner)', desc: 'Solopreneur / LLC' },
    ],
  },
  {
    id: 2,
    question: 'How many people total, including you?',
    hint: "Pricing scales per person — this is the second biggest factor.",
    options: [
      { key: 'solo', letter: 'A', label: 'Just me', desc: '1 person' },
      { key: 'small', letter: 'B', label: 'Small team', desc: '2-5 people' },
      { key: 'growing', letter: 'C', label: 'Growing', desc: '6-15 people' },
      { key: 'established', letter: 'D', label: 'Established', desc: '16+ people' },
    ],
  },
  {
    id: 3,
    question: "What matters most to you?",
    hint: "Be honest — this is where the matching actually happens.",
    options: [
      { key: 'cheap', letter: 'A', label: 'Lowest monthly cost', desc: 'Budget first' },
      { key: 'easy', letter: 'B', label: 'Easiest to use', desc: "\"I'm not a payroll expert\"" },
      { key: 'features', letter: 'C', label: 'Most features for growth', desc: 'HR, benefits, time tracking' },
      { key: 'support', letter: 'D', label: 'Best human support', desc: 'Real people, not chatbots' },
    ],
  },
  {
    id: 4,
    question: 'Where are your workers located?',
    hint: "Multi-state payroll is where cheap tools break.",
    options: [
      { key: 'one', letter: 'A', label: 'One state', desc: 'Simple' },
      { key: 'multi', letter: 'B', label: 'Multiple US states', desc: 'Remote team' },
      { key: 'intl', letter: 'C', label: 'International too', desc: 'Global' },
    ],
  },
  {
    id: 5,
    question: 'Which accounting software do you already use?',
    hint: "Integration cuts setup time by 70%.",
    options: [
      { key: 'qbo', letter: 'A', label: 'QuickBooks Online', desc: '~70% of small biz' },
      { key: 'xero', letter: 'B', label: 'Xero', desc: 'Modern pick' },
      { key: 'wave', letter: 'C', label: 'Wave or FreshBooks', desc: 'Budget pick' },
      { key: 'none', letter: 'D', label: 'None yet / spreadsheets', desc: 'Just starting out' },
    ],
  },
]

/**
 * Priority-ordered recommendation engine.
 * First matching rule wins. This is deliberate: specific cases
 * (contractors only, international, already on QBO) override
 * general preferences (cheap, easy, features).
 */
export function getRecommendation(answers: Record<number, string>): Recommendation {
  const q1 = answers[1] || ''
  const q2 = answers[2] || ''
  const q3 = answers[3] || ''
  const q4 = answers[4] || ''
  const q5 = answers[5] || ''

  // Rule 1: Contractors only → Gusto Contractor plan
  if (q1 === 'contractors') {
    return {
      primaryService: 'Gusto Contractor',
      primaryUrl: AFFILIATE_LINKS.gusto.url,
      brand: 'Gusto',
      title: 'Gusto Contractor',
      subtitle: 'Best for 1099 contractor-only businesses',
      reasoning:
        "You're only paying 1099s — Gusto's contractor-only plan files year-end 1099s automatically for $35/month plus $6 per contractor. It's the simplest option for a contractor-only business.",
      cost: '~$35',
      setup: '15 min',
      trial: '30 days',
    }
  }

  // Rule 2: Self (S-corp owner only) → Patriot Basic
  if (q1 === 'self') {
    return {
      primaryService: 'Patriot Basic',
      primaryUrl: AFFILIATE_LINKS.patriot.url,
      brand: 'Patriot',
      title: 'Patriot Basic',
      subtitle: 'Best for solo S-corp owners',
      reasoning:
        "Paying yourself from an S-corp is the simplest payroll case. Patriot's Basic plan at $17/month handles a single-person S-corp owner salary cleanly. Upgrade to Full Service at $37/mo if you want tax filing done for you.",
      cost: '~$17',
      setup: '20 min',
      trial: '30 days',
    }
  }

  // Rule 3: International workers → Rippling Global
  if (q4 === 'intl') {
    return {
      primaryService: 'Rippling Global',
      primaryUrl: AFFILIATE_LINKS.rippling.url,
      brand: 'Rippling',
      title: 'Rippling Global',
      subtitle: 'Best for international teams',
      reasoning:
        "You need international payroll, and Rippling is genuinely in a league of its own here — 160+ countries, contractor compliance built in, and full HR/device management in the same system.",
      cost: '~$8/pp',
      setup: '2-3 days',
      trial: '14 days',
    }
  }

  // Rule 4: Already on QuickBooks Online → QuickBooks Payroll
  if (q5 === 'qbo') {
    return {
      primaryService: 'QuickBooks Payroll',
      primaryUrl: AFFILIATE_LINKS.qbo.url,
      brand: 'QuickBooks',
      title: 'QuickBooks Payroll',
      subtitle: 'Best if you already use QBO',
      reasoning:
        "You already use QuickBooks Online, which is the single biggest factor. QuickBooks Payroll zero-touch syncs with your accounting and handles same-day direct deposit. Obvious pick when you're already in the QBO ecosystem.",
      cost: '~$45',
      setup: '30 min',
      trial: '30 days',
    }
  }

  // Rule 5: Price-first → Patriot Full Service
  if (q3 === 'cheap') {
    return {
      primaryService: 'Patriot Full Service',
      primaryUrl: AFFILIATE_LINKS.patriot.url,
      brand: 'Patriot',
      title: 'Patriot Full Service',
      subtitle: 'Cheapest full-service payroll',
      reasoning:
        "You're price-sensitive, and Patriot Full Service is genuinely the cheapest option that still files your federal, state, and local taxes. US-based support, free direct deposit, no feature paywalls.",
      cost: '~$37',
      setup: '20 min',
      trial: '30 days',
    }
  }

  // Rule 6: Established (16+ employees) → ADP RUN
  if (q2 === 'established') {
    return {
      primaryService: 'ADP RUN',
      primaryUrl: AFFILIATE_LINKS.adp.url,
      brand: 'ADP',
      title: 'ADP RUN',
      subtitle: 'Best for 16+ employees',
      reasoning:
        "You have 16+ employees, which is where ADP RUN genuinely starts to shine. Deep HR features, compliance support, and a platform that scales cleanly to 100+ without migration.",
      cost: '~$119+',
      setup: '1 day',
      trial: '3 mo 50% off',
    }
  }

  // Rule 7: Features OR growing → OnPay
  if (q3 === 'features' || q2 === 'growing') {
    return {
      primaryService: 'OnPay',
      primaryUrl: AFFILIATE_LINKS.onpay.url,
      brand: 'OnPay',
      title: 'OnPay',
      subtitle: 'Best value for growing teams',
      reasoning:
        "OnPay is the best-value full-service payroll. Flat pricing, no tier upsells, every feature included. Less polished than Gusto but genuinely cheaper for the same capabilities. First month free.",
      cost: '~$40',
      setup: '30 min',
      trial: '1 mo free',
    }
  }

  // Rule 8 (default): Gusto Core
  return {
    primaryService: 'Gusto Core',
    primaryUrl: AFFILIATE_LINKS.gusto.url,
    brand: 'Gusto',
    title: 'Gusto Core',
    subtitle: 'Best for most small businesses',
    reasoning:
      "Based on your answers, Gusto is the right fit. It's the easiest full-service payroll for small W2 teams, runs in every US state at the same price, and its autopilot feature means payroll literally runs itself once set up.",
    cost: '~$49',
    setup: '30 min',
    trial: '30 days',
  }
}
