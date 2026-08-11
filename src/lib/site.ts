// Single source of truth for firm identity and contact details.
// Items marked PROVISIONAL await partner confirmation (spec §10) —
// update here and they change everywhere.

export const SITE = {
  name: 'Erskine Advisory',
  domain: 'erskineadvisory.com',
  url: 'https://erskineadvisory.com',
  // PROVISIONAL — open item #6: home base city to name publicly.
  homeBase: 'Salt Spring Island, British Columbia',
  serviceArea: 'Engagements across Canada and the United States, delivered remote-first.',
  // PROVISIONAL — open item #10: business email and phone.
  email: 'enquiries@erskineadvisory.com',
  tagline: 'Independent owner’s representation for significant private residences.',
} as const;

export const NAV = [
  { label: 'The Owner’s Position', href: '/the-owners-position' },
  { label: 'Services', href: '/services' },
  { label: 'Fees', href: '/fees' },
  { label: 'Independence', href: '/independence' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = [
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Request a Project Review', href: '/project-review' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
] as const;
