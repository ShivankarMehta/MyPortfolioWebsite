import React, { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'

const getLeetCodeUrl = (username) => `https://leetcode.com/u/${username}/`

const getFallbackStats = (text) => {
  return text.leetcodeStats.map(([value, label]) => ({ value, label }))
}

const LeetCodeProfile = ({ text }) => {
  const username = text.leetcodeUsername
  const [profile, setProfile] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true

    const loadLeetCodeProfile = async () => {
      try {
        const response = await fetch(`/.netlify/functions/leetcode?username=${encodeURIComponent(username)}`)

        if (!response.ok) {
          throw new Error('LeetCode profile request failed')
        }

        const payload = await response.json()

        if (isMounted) {
          setProfile(payload)
          setStatus('live')
        }
      } catch (error) {
        if (isMounted) {
          setStatus('fallback')
        }
      }
    }

    loadLeetCodeProfile()

    return () => {
      isMounted = false
    }
  }, [username])

  const stats = useMemo(() => {
    if (!profile?.solved) {
      return getFallbackStats(text)
    }

    return [
      { value: profile.solved.total, label: 'Total solved' },
      { value: profile.solved.easy, label: 'Easy' },
      { value: profile.solved.medium, label: 'Medium' },
      { value: profile.solved.hard, label: 'Hard' },
      { value: profile.ranking || 'N/A', label: 'Ranking' },
      { value: profile.reputation ?? '0', label: 'Reputation' }
    ]
  }, [profile, text])

  return (
    <article className="leetcode-card" data-reveal="fade-up">
      <div className="leetcode-card__main">
        <span className="leetcode-card__status">
          <Code2 size={16} aria-hidden="true" /> {status === 'live' ? 'LIVE LEETCODE SYNC' : 'CODING PROFILE'}
        </span>
        <h3>{text.leetcodeTitle}</h3>
        <p>{profile?.realName ? `${profile.realName} / @${profile.username}` : text.leetcodeDescription}</p>
      </div>
      <div className="leetcode-card__stats" aria-label={text.leetcodeAria}>
        {stats.map(({ value, label }) => (
          <span key={label}>
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <a className="leetcode-card__link" href={getLeetCodeUrl(username)} target="_blank" rel="noreferrer">
        {text.leetcodeAction} <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  )
}

export default LeetCodeProfile
