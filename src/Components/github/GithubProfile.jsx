import React from 'react'
import { ArrowUpRight, GitBranch, Github, MapPin } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const profileUrl = 'https://github.com/ShivankarMehta'

const repositories = [
  {
    name: 'microservices_gateway',
    language: 'JavaScript',
    updated: '2026-05-18',
    href: `${profileUrl}/microservices_gateway`
  },
  {
    name: 'Langraphchat-',
    language: 'JavaScript',
    updated: '2026-03-13',
    href: `${profileUrl}/Langraphchat-`
  },
  {
    name: 'DB_MCP_SERVER',
    language: 'JavaScript',
    updated: '2025-11-27',
    href: `${profileUrl}/DB_MCP_SERVER`
  },
  {
    name: 'Large_Data_fetching_techniques',
    language: 'JavaScript',
    updated: '2025-07-03',
    href: `${profileUrl}/Large_Data_fetching_techniques`
  },
  {
    name: 'Webhook-Polling-webSocket',
    language: 'HTML',
    updated: '2025-06-30',
    href: `${profileUrl}/Webhook-Polling-webSocket`
  }
]

const languages = [
  ['JavaScript', 45],
  ['CSS', 13],
  ['HTML', 10],
  ['TypeScript', 3],
  ['EJS', 2]
]

const GithubProfile = () => {
  const { copy } = usePreferences()
  const text = copy.github

  return (
    <section id="github">
      <div className="container os-surface module-panel module-panel--github">
        <OSWindowBar module="SYS-05 / GIT" path="/origin/ShivankarMehta/repos" status={text.status} />
        <div className="github__heading">
          <div className="section-heading" data-reveal="fade-up">
            <span className="section-kicker">{text.kicker}</span>
            <h2>{text.title}</h2>
            <p className="github__intro">{text.intro}</p>
          </div>
          <a className="github__profile-link" href={profileUrl} target="_blank" rel="noreferrer">
            <Github size={19} aria-hidden="true" />
            @ShivankarMehta
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="github__dashboard" data-reveal="fade-up" aria-label={text.dashboardAria}>
          <div className="github__identity">
            <Github size={28} aria-hidden="true" />
            <div>
              <strong>Shivankar Mehta</strong>
              <span><MapPin size={13} aria-hidden="true" /> Omura, Nagasaki, Japan</span>
            </div>
          </div>
          {text.metrics.map(([value, label]) => (
            <div className="github__metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="github__workspace">
          <div className="github__languages" data-reveal="fade-up">
            <div className="github__subhead">{text.languageTitle}</div>
            {languages.map(([language, count], index) => (
              <div className="github__language" key={language}>
                <div>
                  <span>{language}</span>
                  <small>{count} {text.repositories}</small>
                </div>
                <i style={{ '--repo-width': `${Math.round((count / languages[0][1]) * 100)}%`, '--repo-delay': `${index * 100}ms` }} />
              </div>
            ))}
            <p>{text.snapshot}</p>
          </div>
          <div className="github__repos" data-reveal="fade-up">
            <div className="github__subhead">{text.repoTitle}</div>
            {repositories.map(({ name, language, updated, href }, index) => (
              <a className="github__repo" href={href} target="_blank" rel="noreferrer" key={name}>
                <span className="github__repo-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="github__repo-name"><GitBranch size={14} aria-hidden="true" /> {name}</span>
                <small>{language}</small>
                <time dateTime={updated}>{updated}</time>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubProfile
