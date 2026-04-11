'use client'

import { useState, useEffect } from 'react'

interface Task {
  id: string
  title: string
  url?: string
  urlLabel?: string
  time: string
  details: string[]
  category: string
}

const TASKS: Task[] = [
  // HOUR 1-2: ACCOUNTS & CONNECTIONS
  {
    id: 'vercel',
    title: 'Connect repo to Vercel & deploy',
    url: 'https://vercel.com/new',
    urlLabel: 'vercel.com/new',
    time: '15 min',
    details: [
      'Sign in to Vercel (use GitHub login)',
      'Click "Add New Project"',
      'Import jessegiddings/formright.ai',
      'Framework: Next.js (auto-detected)',
      'Click Deploy — wait ~60 seconds',
      'After deploy, go to Settings → Domains',
      'Add formright.ai as custom domain',
      'Add getformright.com → redirect to formright.ai',
      'Update DNS records as Vercel instructs',
    ],
    category: 'Hour 1–2: Accounts & Connections',
  },
  {
    id: 'supabase',
    title: 'Create Supabase project & tables',
    url: 'https://supabase.com/dashboard',
    urlLabel: 'supabase.com/dashboard',
    time: '10 min',
    details: [
      'Create account / sign in at supabase.com',
      'Click "New Project" — name it "formright"',
      'Choose region closest to you, set a DB password',
      'Wait for project to provision (~2 min)',
      'Go to SQL Editor and run these two queries:',
      '── CREATE TABLE quiz_sessions (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), answers JSONB, recommendation TEXT, completed BOOLEAN DEFAULT false, utm_source TEXT, utm_campaign TEXT, utm_term TEXT, referrer TEXT, created_at TIMESTAMPTZ DEFAULT now());',
      '── CREATE TABLE affiliate_clicks (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), session_id UUID REFERENCES quiz_sessions(id), service TEXT, placement TEXT, recommendation_match BOOLEAN, created_at TIMESTAMPTZ DEFAULT now());',
      'Go to Settings → API — copy your Project URL and anon/public key',
    ],
    category: 'Hour 1–2: Accounts & Connections',
  },
  {
    id: 'anthropic',
    title: 'Get Anthropic API key (for chat widget)',
    url: 'https://console.anthropic.com/settings/keys',
    urlLabel: 'console.anthropic.com',
    time: '5 min',
    details: [
      'Sign in at console.anthropic.com',
      'Go to Settings → API Keys',
      'Click "Create Key" — name it "formright-chat"',
      'Copy the key (starts with sk-ant-...)',
      'Add billing/credits if needed ($5 is plenty to start)',
    ],
    category: 'Hour 1–2: Accounts & Connections',
  },
  {
    id: 'env-vars',
    title: 'Add environment variables in Vercel',
    url: 'https://vercel.com/dashboard',
    urlLabel: 'Vercel Dashboard → Settings → Env Vars',
    time: '5 min',
    details: [
      'Go to your formright project in Vercel',
      'Settings → Environment Variables',
      'Add each of these (all environments):',
      '── ANTHROPIC_API_KEY = sk-ant-... (from step above)',
      '── NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co (from Supabase)',
      '── NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJ... (from Supabase)',
      '── NEXT_PUBLIC_APP_URL = https://formright.ai',
      '── ANALYTICS_SECRET = (make up any secret string for your dashboard)',
      'Click "Redeploy" in Deployments tab to pick up new vars',
    ],
    category: 'Hour 1–2: Accounts & Connections',
  },
  // HOUR 2-3: AFFILIATE APPLICATIONS
  {
    id: 'awin',
    title: 'Apply: ZenBusiness via Awin ($100/conversion)',
    url: 'https://www.awin.com/us/publishers/sign-up',
    urlLabel: 'awin.com — Publisher Sign Up',
    time: '10 min',
    details: [
      'Create an Awin publisher account',
      'Search advertisers for "ZenBusiness"',
      'Click "Join Programme" / Apply',
      'Website: formright.ai',
      'Description: "AI-powered LLC formation advisor. Personalized quiz recommends the right service. Traffic: paid search + organic SEO."',
      'Approval: typically 1-3 business days',
      'THIS IS YOUR #1 PRIORITY — $100 per conversion',
    ],
    category: 'Hour 2–3: Affiliate Applications',
  },
  {
    id: 'northwest',
    title: 'Apply: Northwest Registered Agent (Direct)',
    url: 'https://www.northwestregisteredagent.com/affiliate-program',
    urlLabel: 'northwestregisteredagent.com/affiliate-program',
    time: '5 min',
    details: [
      'Go to their affiliate page and fill out the form',
      'Same description as ZenBusiness application',
      'Approval: typically 1-5 business days',
    ],
    category: 'Hour 2–3: Affiliate Applications',
  },
  {
    id: 'cj',
    title: 'Apply: LegalZoom + Rocket Lawyer via CJ Affiliate',
    url: 'https://www.cj.com/publisher',
    urlLabel: 'cj.com — Publisher Sign Up',
    time: '10 min',
    details: [
      'Create a CJ Affiliate (Commission Junction) publisher account',
      'Once approved, search advertisers for "LegalZoom" → apply',
      'Search for "Rocket Lawyer" → apply',
      'Same site description for both',
      'CJ account approval: usually same day',
      'Advertiser approval: 1-5 business days each',
    ],
    category: 'Hour 2–3: Affiliate Applications',
  },
  {
    id: 'impact',
    title: 'Apply: Bizee + Tailor Brands via Impact',
    url: 'https://app.impact.com/signup/publisher',
    urlLabel: 'impact.com — Publisher Sign Up',
    time: '10 min',
    details: [
      'Create an Impact publisher account',
      'Search brands for "Bizee" → apply',
      'Search for "Tailor Brands" → apply',
      'Same site description for both',
      'Impact account approval: usually same day',
      'Brand approval: 1-5 business days each',
    ],
    category: 'Hour 2–3: Affiliate Applications',
  },
  // HOUR 3-4: ANALYTICS & TRACKING
  {
    id: 'ga4',
    title: 'Set up Google Analytics 4',
    url: 'https://analytics.google.com',
    urlLabel: 'analytics.google.com',
    time: '10 min',
    details: [
      'Sign in to Google Analytics',
      'Click Admin → Create Property',
      'Property name: "FormRight"',
      'Set up a Web data stream → URL: formright.ai',
      'Copy the Measurement ID (starts with G-)',
      'Add to Vercel env vars: NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX',
      'Redeploy in Vercel',
    ],
    category: 'Hour 3–4: Analytics & Tracking',
  },
  {
    id: 'gsc',
    title: 'Verify Google Search Console',
    url: 'https://search.google.com/search-console',
    urlLabel: 'search.google.com/search-console',
    time: '5 min',
    details: [
      'Add property → URL prefix → https://formright.ai',
      'Verify via DNS TXT record (Vercel DNS settings)',
      'Submit sitemap: https://formright.ai/sitemap.xml',
      'This lets Google discover and index your pages',
    ],
    category: 'Hour 3–4: Analytics & Tracking',
  },
  {
    id: 'posthog',
    title: 'Set up PostHog (optional but recommended)',
    url: 'https://us.posthog.com/signup',
    urlLabel: 'posthog.com — Free tier',
    time: '10 min',
    details: [
      'Create account — free tier gives 1M events/month',
      'Create project, copy your Project API Key',
      'Add to Vercel: NEXT_PUBLIC_POSTHOG_KEY = phc_...',
      'PostHog gives you session recordings, funnels, and heatmaps',
      'Great for watching real users go through the quiz',
    ],
    category: 'Hour 3–4: Analytics & Tracking',
  },
  // VERIFICATION
  {
    id: 'test-quiz',
    title: 'Test: Complete the quiz 5-10 times',
    time: '10 min',
    details: [
      'Go to formright.ai',
      'Complete the quiz with different answer combinations',
      'Verify each path gives the right recommendation:',
      '── Privacy priority → Northwest',
      '── Legal/lawyers → LegalZoom',
      '── Speed priority → Bizee',
      '── $0 budget → ZenBusiness Starter',
      '── Default → ZenBusiness Pro',
      'Check Supabase → quiz_sessions table has entries',
    ],
    category: 'Verification (Before Ads)',
  },
  {
    id: 'test-chat',
    title: 'Test: Chat widget responds',
    time: '5 min',
    details: [
      'Click the green chat bubble on formright.ai',
      'Try the quick replies: "Which is cheapest?", "LLC vs S-Corp?"',
      'Type a custom question',
      'Verify you get intelligent Claude-powered responses',
      'If not working, check ANTHROPIC_API_KEY in Vercel env vars',
    ],
    category: 'Verification (Before Ads)',
  },
  {
    id: 'test-mobile',
    title: 'Test: Mobile responsive',
    time: '5 min',
    details: [
      'Open formright.ai on your actual phone',
      'Scroll through entire page',
      'Complete the quiz on mobile',
      'Check that chat widget works on mobile',
      'Verify comparison table scrolls horizontally',
    ],
    category: 'Verification (Before Ads)',
  },
  {
    id: 'test-links',
    title: 'Test: Click every affiliate link',
    time: '5 min',
    details: [
      'Click affiliate links in: quiz results, service cards, comparison table',
      'Verify each opens the correct service website',
      'Check Supabase → affiliate_clicks table has entries',
      'Once real tracking links are in, verify the ref/tracking params appear in the URL',
    ],
    category: 'Verification (Before Ads)',
  },
  {
    id: 'test-dashboard',
    title: 'Test: Analytics dashboard',
    time: '2 min',
    details: [
      'Go to formright.ai/dashboard',
      'Enter your ANALYTICS_SECRET',
      'Verify quiz stats, clicks, and daily data show up',
    ],
    category: 'Verification (Before Ads)',
  },
  // WHEN APPROVED: SWAP LINKS
  {
    id: 'swap-links',
    title: 'Replace placeholder affiliate links (as programs approve)',
    time: '5 min per service',
    details: [
      'As each program approves, get your tracking link',
      'Edit lib/affiliateLinks.ts in the repo',
      'Replace YOUR_AWIN_ID, YOUR_ID etc. with real tracking URLs',
      'Commit, push to main — Vercel auto-deploys',
      'Test the live link to confirm tracking fires',
      'DO NOT launch paid ads until at least ZenBusiness link is live',
    ],
    category: 'When Approved: Swap Links',
  },
  // ADS
  {
    id: 'google-ads',
    title: 'Launch Google Search Ads ($30/day)',
    url: 'https://ads.google.com',
    urlLabel: 'ads.google.com',
    time: '30 min',
    details: [
      'Create Google Ads account if you don\'t have one',
      'Create a Search campaign',
      'Budget: $30/day',
      'Start with 3 keywords (exact match):',
      '── [best llc formation service] → send to formright.ai',
      '── [zenbusiness vs legalzoom] → send to formright.ai#compare',
      '── [cheapest llc service] → send to formright.ai#quiz',
      'Ad copy: "Find Your Perfect LLC Service — Free 60-Second Quiz"',
      'Add UTM params: ?utm_source=google&utm_campaign=search&utm_term={keyword}',
      'The UTM params will show up in your Supabase data and dashboard',
    ],
    category: 'Go Live: Launch Ads',
  },
]

const STORAGE_KEY = 'formright-launch-checklist'

export default function LaunchChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setChecked(new Set(JSON.parse(saved)))
  }, [])

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)))
      return next
    })
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const categories = Array.from(new Set(TASKS.map((t) => t.category)))
  const totalTasks = TASKS.length
  const completedTasks = checked.size
  const pct = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="min-h-screen bg-cream px-4 py-10 md:px-8">
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green rounded-[6px] flex items-center justify-center text-white font-serif text-base font-semibold">
              F
            </div>
            <span className="font-serif text-xl font-semibold text-dark">
              Form<span className="text-green">Right</span>
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-2">
            48-Hour Launch Checklist
          </h1>
          <p className="text-base text-warm-gray leading-relaxed">
            Everything you need to do to get FormRight.ai live and earning. Check off each item as you go — progress saves automatically.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white border border-border rounded-xl p-5 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-dark">
              {completedTasks} of {totalTasks} tasks complete
            </span>
            <span className="font-serif text-xl font-bold text-green">{pct}%</span>
          </div>
          <div className="h-2.5 bg-sand rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                background: 'linear-gradient(90deg, var(--green), var(--green-mid))',
              }}
            />
          </div>
        </div>

        {/* Tasks by category */}
        {categories.map((cat) => {
          const catTasks = TASKS.filter((t) => t.category === cat)
          const catDone = catTasks.filter((t) => checked.has(t.id)).length
          return (
            <div key={cat} className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-serif text-lg font-bold text-dark">{cat}</h2>
                <span className="text-[11px] font-bold tracking-wider uppercase text-warm-gray">
                  {catDone}/{catTasks.length}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {catTasks.map((task) => {
                  const isDone = checked.has(task.id)
                  const isExpanded = expandedId === task.id
                  return (
                    <div
                      key={task.id}
                      className={`bg-white border rounded-xl overflow-hidden transition-all ${
                        isDone ? 'border-green/30 bg-green-light/30' : 'border-border'
                      }`}
                    >
                      <div className="flex items-start gap-3 px-4 py-3.5">
                        {/* Checkbox */}
                        <button
                          type="button"
                          onClick={() => toggle(task.id)}
                          className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all ${
                            isDone
                              ? 'bg-green border-green text-white'
                              : 'border-border bg-white hover:border-green'
                          }`}
                        >
                          {isDone && <span className="text-xs">✓</span>}
                        </button>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <button
                            type="button"
                            onClick={() => toggleExpand(task.id)}
                            className={`text-left w-full bg-transparent border-none p-0 cursor-pointer font-sans text-sm font-semibold transition-colors ${
                              isDone ? 'text-green line-through' : 'text-dark'
                            }`}
                          >
                            {task.title}
                          </button>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[11px] text-warm-gray">⏱ {task.time}</span>
                            {task.url && (
                              <a
                                href={task.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-green font-medium no-underline hover:underline"
                              >
                                → {task.urlLabel}
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Expand */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(task.id)}
                          className={`w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs text-warm-gray flex-shrink-0 cursor-pointer bg-transparent transition-all ${
                            isExpanded ? 'rotate-45 bg-green border-green text-white' : ''
                          }`}
                        >
                          +
                        </button>
                      </div>

                      {/* Expanded details */}
                      <div
                        className="overflow-hidden transition-[max-height] duration-300"
                        style={{ maxHeight: isExpanded ? '600px' : '0px' }}
                      >
                        <div className="px-4 pb-4 pl-12">
                          <ol className="list-none flex flex-col gap-1.5">
                            {task.details.map((d, i) => (
                              <li
                                key={i}
                                className={`text-[13px] leading-relaxed ${
                                  d.startsWith('──')
                                    ? 'text-ink font-mono text-[12px] bg-paper rounded px-2 py-1 ml-2 break-all'
                                    : 'text-medium'
                                }`}
                              >
                                {d.startsWith('──') ? d.slice(3) : `${i + 1}. ${d}`}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Footer note */}
        <div className="bg-green-light border border-green/20 rounded-xl p-5 mt-8">
          <div className="font-serif text-base font-bold text-dark mb-1">
            You&apos;re on track.
          </div>
          <p className="text-sm text-medium leading-relaxed">
            Complete the top sections tonight. Affiliate approvals take 1-5 days — apply now and swap links as they come in. You can launch ads as soon as ZenBusiness (Awin) approves. Everything else is optimization.
          </p>
        </div>
      </div>
    </div>
  )
}
