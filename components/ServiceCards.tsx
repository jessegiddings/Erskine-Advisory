import { AFFILIATE_LINKS } from '@/lib/affiliateLinks'

const services = [
  {
    key: 'gusto' as const,
    badge: 'Top Pick',
    tagline: 'The easiest full-service payroll for small W2 teams. Autopilot runs payroll itself once set up. Files taxes in all 50 states. Benefits, health, and 401k built in.',
    features: [
      'Autopilot payroll (runs itself)',
      'Files taxes in all 50 states',
      'Benefits + health + 401k built in',
      '30-minute setup even for first-timers',
    ],
    base: '$49/mo',
    perEmployee: '$6',
    trial: '30 days',
    featured: true,
  },
  {
    key: 'onpay' as const,
    badge: 'Best value',
    tagline: 'One flat rate with every feature included. No tier upsells. Strong in niche industries like farms and nonprofits.',
    features: [],
    base: '$40/mo',
    perEmployee: '$6',
    trial: '1 month',
    featured: false,
  },
  {
    key: 'qbo' as const,
    badge: 'Best if on QBO',
    tagline: 'Zero-touch sync with QuickBooks Online. Same-day direct deposit. The mobile app is the best in the category.',
    features: [],
    base: '$45/mo',
    perEmployee: '$6',
    trial: '30 days',
    featured: false,
  },
  {
    key: 'patriot' as const,
    badge: 'Cheapest full-service',
    tagline: 'The cheapest option that still files your federal, state, and local taxes. US-based support that actually responds.',
    features: [],
    base: '$37/mo',
    perEmployee: '$4',
    trial: '30 days',
    featured: false,
  },
  {
    key: 'rippling' as const,
    badge: 'Best for scaling',
    tagline: 'International payroll in 160+ countries. Payroll + IT + device management in one. Built for growing tech-forward teams.',
    features: [],
    base: '$8/person',
    perEmployee: '-',
    trial: '14 days',
    featured: false,
  },
  {
    key: 'adp' as const,
    badge: 'Best for 16+',
    tagline: "The incumbent, 70+ years in payroll. Scales cleanly from 15 to 1,500 employees. Deepest HR and compliance features.",
    features: [],
    base: 'Quote',
    perEmployee: 'Varies',
    trial: '3 mo 50% off',
    featured: false,
  },
]

export default function ServiceCards() {
  return (
    <section id="picks" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-wrap justify-between items-end gap-6 pb-8 border-b border-[#3a4a3f]/30">
        <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[0.95] max-w-3xl">
          The six picks, sorted by{' '}
          <span className="font-serif-italic font-normal text-[#00ffa3]">who they&apos;re for.</span>
        </h2>
        <p className="font-mono text-[11px] tracking-widest text-[#6b6b63] uppercase">Updated April 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#3a4a3f]/20 border border-[#3a4a3f]/20">
        {/* Gusto — Featured, spans 2x2 */}
        {(() => {
          const gusto = services[0]
          const link = AFFILIATE_LINKS[gusto.key]
          return (
            <div
              className="lg:col-span-2 lg:row-span-2 bg-[#121416] p-10 relative overflow-hidden group border border-[#00ffa3]/40"
              style={{
                background: 'linear-gradient(180deg, rgba(0,255,163,0.06) 0%, #121416 50%)',
              }}
            >
              <div className="absolute top-0 right-0 bg-[#00ffa3] text-[#002111] px-4 py-1.5 font-mono text-[10px] font-bold tracking-wider">
                &#9733; TOP PICK
              </div>
              <div className="flex flex-col h-full">
                <div>
                  <div className="font-mono text-[10px] text-[#00ffa3] mb-4 uppercase tracking-wider">
                    Best for most small businesses
                  </div>
                  <div className="text-6xl font-headline font-bold mb-6 tracking-tighter">Gusto</div>
                  <p className="text-lg text-[#a8a89f] max-w-md leading-relaxed mb-8">{gusto.tagline}</p>
                  <ul className="space-y-2 text-sm text-[#a8a89f] mb-8 list-none">
                    {gusto.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-[#00ffa3]">&rarr;</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="grid grid-cols-3 gap-3 mb-6 p-1 bg-[#3a4a3f]/20">
                    <div className="bg-[#1a1c1e] p-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                        Starts at
                      </div>
                      <div className="font-headline text-lg font-bold">{gusto.base}</div>
                    </div>
                    <div className="bg-[#1a1c1e] p-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                        Per employee
                      </div>
                      <div className="font-headline text-lg font-bold">{gusto.perEmployee}</div>
                    </div>
                    <div className="bg-[#1a1c1e] p-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1">
                        Free trial
                      </div>
                      <div className="font-headline text-lg font-bold">{gusto.trial}</div>
                    </div>
                  </div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#00ffa3] text-[#002111] py-4 font-bold hover:bg-[#00e290] transition-colors no-underline"
                  >
                    See Gusto &rarr;
                  </a>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Remaining 5 cards */}
        {services.slice(1).map((s) => {
          const link = AFFILIATE_LINKS[s.key]
          return (
            <div
              key={s.key}
              className="bg-[#121416] p-7 hover:bg-[#1a1c1e] transition-colors group"
            >
              <div className="font-mono text-[10px] text-[#6b6b63] mb-3 uppercase tracking-wider">
                {s.badge}
              </div>
              <div className="text-2xl font-headline font-bold mb-3">{link.name}</div>
              <p className="text-[#a8a89f] text-sm mb-5 leading-relaxed">{s.tagline}</p>
              <div className="space-y-2 mb-6 pt-4 border-t border-[#3a4a3f]/30">
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-[#6b6b63] uppercase">Starts at</span>
                  <span className="font-mono font-bold">{s.base}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-[#6b6b63] uppercase">Per employee</span>
                  <span className="font-mono font-bold">{s.perEmployee}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-[#6b6b63] uppercase">Free trial</span>
                  <span className="font-mono font-bold">{s.trial}</span>
                </div>
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffa3] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all no-underline"
              >
                See {link.name} <span>&rarr;</span>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
