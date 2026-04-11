'use client'

import { useState } from 'react'

interface AnalyticsData {
  quiz: {
    total: number
    completed: number
    completionRate: number
    recommendationDistribution: Record<string, number>
    utmSources: Record<string, number>
  }
  clicks: {
    total: number
    byService: Record<string, number>
    byPlacement: Record<string, number>
    recommendationMatchRate: number
  }
  daily: Record<string, { started: number; completed: number; clicks: number }>
  generatedAt: string
}

export default function Dashboard() {
  const [key, setKey] = useState('')
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/analytics?key=${encodeURIComponent(key)}`)
      if (!res.ok) {
        setError(res.status === 401 ? 'Invalid key' : 'Failed to load')
        return
      }
      setData(await res.json())
    } catch {
      setError('Connection error')
    } finally {
      setLoading(false)
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="bg-white border border-border rounded-2xl p-8 max-w-sm w-full shadow-sm">
          <h1 className="font-serif text-2xl font-bold text-dark mb-2">FormRight Analytics</h1>
          <p className="text-sm text-warm-gray mb-6">Enter your analytics key to view the dashboard.</p>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchData()}
            placeholder="Analytics key"
            className="w-full bg-paper border border-border rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-green transition-colors mb-3"
          />
          {error && <p className="text-red text-sm mb-3">{error}</p>}
          <button
            onClick={fetchData}
            disabled={loading || !key}
            className="w-full bg-green text-white font-semibold text-sm py-3 rounded-lg hover:bg-green-mid transition-colors disabled:opacity-40"
          >
            {loading ? 'Loading...' : 'View Dashboard'}
          </button>
        </div>
      </div>
    )
  }

  const sortedDaily = Object.entries(data.daily)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 14)

  return (
    <div className="min-h-screen bg-cream px-6 py-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-dark">FormRight Analytics</h1>
            <p className="text-sm text-warm-gray mt-1">
              Last updated: {new Date(data.generatedAt).toLocaleString()}
            </p>
          </div>
          <button
            onClick={fetchData}
            className="bg-green text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-mid transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Top metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard label="Quizzes Started" value={data.quiz.total} />
          <MetricCard label="Quizzes Completed" value={data.quiz.completed} />
          <MetricCard label="Completion Rate" value={`${data.quiz.completionRate}%`} />
          <MetricCard label="Affiliate Clicks" value={data.clicks.total} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Recommendation distribution */}
          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Recommendation Distribution</h3>
            {Object.entries(data.quiz.recommendationDistribution)
              .sort(([, a], [, b]) => b - a)
              .map(([service, count]) => (
                <div key={service} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-ink font-medium">{service}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-paper rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green rounded-full"
                        style={{ width: `${data.quiz.completed > 0 ? (count / data.quiz.completed) * 100 : 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-warm-gray w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            {Object.keys(data.quiz.recommendationDistribution).length === 0 && (
              <p className="text-sm text-warm-gray">No data yet</p>
            )}
          </div>

          {/* Clicks by service */}
          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-dark mb-1">Clicks by Service</h3>
            <p className="text-xs text-warm-gray mb-4">
              Recommendation match rate: <strong className="text-green">{data.clicks.recommendationMatchRate}%</strong>
            </p>
            {Object.entries(data.clicks.byService)
              .sort(([, a], [, b]) => b - a)
              .map(([service, count]) => (
                <div key={service} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-ink font-medium">{service}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-paper rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber rounded-full"
                        style={{ width: `${data.clicks.total > 0 ? (count / data.clicks.total) * 100 : 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-warm-gray w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            {Object.keys(data.clicks.byService).length === 0 && (
              <p className="text-sm text-warm-gray">No clicks yet</p>
            )}
          </div>

          {/* UTM Sources */}
          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Traffic Sources</h3>
            {Object.entries(data.quiz.utmSources)
              .sort(([, a], [, b]) => b - a)
              .map(([source, count]) => (
                <div key={source} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-ink font-medium">{source}</span>
                  <span className="text-sm text-warm-gray">{count}</span>
                </div>
              ))}
            {Object.keys(data.quiz.utmSources).length === 0 && (
              <p className="text-sm text-warm-gray">No data yet</p>
            )}
          </div>

          {/* Clicks by placement */}
          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Clicks by Placement</h3>
            {Object.entries(data.clicks.byPlacement)
              .sort(([, a], [, b]) => b - a)
              .map(([placement, count]) => (
                <div key={placement} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-ink font-medium">{placement}</span>
                  <span className="text-sm text-warm-gray">{count}</span>
                </div>
              ))}
            {Object.keys(data.clicks.byPlacement).length === 0 && (
              <p className="text-sm text-warm-gray">No clicks yet</p>
            )}
          </div>
        </div>

        {/* Daily table */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="font-serif text-lg font-bold text-dark mb-4">Daily Activity (Last 14 Days)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-warm-gray font-medium">Date</th>
                  <th className="text-right py-2 text-warm-gray font-medium">Started</th>
                  <th className="text-right py-2 text-warm-gray font-medium">Completed</th>
                  <th className="text-right py-2 text-warm-gray font-medium">Rate</th>
                  <th className="text-right py-2 text-warm-gray font-medium">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {sortedDaily.map(([date, d]) => (
                  <tr key={date} className="border-b border-border last:border-0">
                    <td className="py-2 text-ink">{date}</td>
                    <td className="py-2 text-right text-medium">{d.started}</td>
                    <td className="py-2 text-right text-medium">{d.completed}</td>
                    <td className="py-2 text-right text-medium">
                      {d.started > 0 ? Math.round((d.completed / d.started) * 100) : 0}%
                    </td>
                    <td className="py-2 text-right text-medium">{d.clicks}</td>
                  </tr>
                ))}
                {sortedDaily.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-warm-gray">No data yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-warm-gray mb-1">{label}</div>
      <div className="font-serif text-2xl font-bold text-dark">{value}</div>
    </div>
  )
}
