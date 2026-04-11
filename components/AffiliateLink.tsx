'use client'

import { analytics } from '@/lib/analytics'

interface AffiliateLinkProps {
  href: string
  service: string
  placement: string
  recommendationMatch?: boolean
  sessionId?: string
  className?: string
  children: React.ReactNode
}

export default function AffiliateLink({
  href,
  service,
  placement,
  recommendationMatch = false,
  sessionId,
  className,
  children,
}: AffiliateLinkProps) {
  const handleClick = () => {
    // Fire analytics event
    analytics.affiliateClick(service, placement, recommendationMatch)

    // Log to Supabase
    fetch('/api/clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        service,
        placement,
        recommendationMatch,
      }),
    }).catch(() => {})
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
