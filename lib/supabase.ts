import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function saveQuizSession(data: {
  answers: Record<number, string>
  recommendation: string
  completed: boolean
  utmSource?: string
  utmCampaign?: string
  utmTerm?: string
  referrer?: string
}) {
  if (!supabase) return null
  const { data: result, error } = await supabase
    .from('quiz_sessions')
    .insert({
      answers: data.answers,
      recommendation: data.recommendation,
      completed: data.completed,
      utm_source: data.utmSource,
      utm_campaign: data.utmCampaign,
      utm_term: data.utmTerm,
      referrer: data.referrer,
    })
    .select('id')
    .single()

  if (error) {
    console.error('Error saving quiz session:', error)
    return null
  }
  return result?.id
}

export async function trackAffiliateClick(data: {
  sessionId?: string
  service: string
  placement: string
  recommendationMatch: boolean
}) {
  if (!supabase) return
  const { error } = await supabase.from('affiliate_clicks').insert({
    session_id: data.sessionId,
    service: data.service,
    placement: data.placement,
    recommendation_match: data.recommendationMatch,
  })
  if (error) console.error('Error tracking click:', error)
}
