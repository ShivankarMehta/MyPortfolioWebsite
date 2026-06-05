import React, { useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile1.png'
import Headersocials from './Headersocials'
import { usePreferences } from '../../context/PreferencesContext'

const stackDomains = [
  {
    id: 'languages',
    orbit: 'CORE',
    summary: 'JS / TypeScript',
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL']
  },
  {
    id: 'frontend',
    orbit: 'UI',
    summary: 'Next.js',
    items: ['ReactJS', 'NextJS', 'HTML', 'CSS', 'Recharts', 'Tremor', 'Nivo', 'Browser APIs']
  },
  {
    id: 'backend',
    orbit: 'API',
    summary: 'Node.js',
    items: ['NodeJS', 'ExpressJS', 'REST APIs', 'SSH2', 'WebSockets', 'Streams', 'Clusters']
  },
  {
    id: 'data',
    orbit: 'DATA',
    summary: 'MySQL',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'pgvector', 'pg-boss', 'ETL Pipelines', 'Query Optimization']
  },
  {
    id: 'ai',
    orbit: 'AI',
    summary: 'RAG',
    items: ['MCP Server', 'LLM Integration', 'RAG', 'Gemini API', 'LangChain', 'Document Intelligence', 'OCR']
  },
  {
    id: 'operations',
    orbit: 'OPS',
    summary: 'Linux',
    items: ['Docker', 'Git', 'CI/CD', 'AlmaLinux', 'CentOS', 'Server Management', 'Sakura Internet']
  }
]

const networkRoutes = [
  { endpoint: 'next.dashboard', protocol: 'HTTPS', state: '200 OK' },
  { endpoint: 'node.gateway', protocol: 'WSS', state: 'LIVE' },
  { endpoint: 'mysql.cluster', protocol: 'SSH2', state: 'SYNC' },
  { endpoint: 'rag.vector', protocol: 'SSE', state: 'READY' }
]

const observatorySignals = [
  { id: 'docker', label: 'Docker' },
  { id: 'websocket', label: 'Next.js' },
  { id: 'redis', label: 'Redis' },
  { id: 'ssh2', label: 'SSH2' },
  { id: 'vector', label: 'pgvector' },
  { id: 'ocr', label: 'OCR' },
  { id: 'cicd', label: 'CI/CD' },
  { id: 'rest', label: 'REST' }
]

const Header = () => {
  const { copy } = usePreferences()
  const text = copy.header
  const [openObservatoryPanel, setOpenObservatoryPanel] = useState(null)

  const toggleObservatoryPanel = (panel) => {
    setOpenObservatoryPanel((current) => (current === panel ? null : panel))
  }

  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <div className="header__command" aria-label="Current development focus">
            <span>shivankar@portfolio:~$</span>
            <code>deploy --focus reliable-systems</code>
            <i aria-hidden="true" />
          </div>
          <span className="header__eyebrow">{text.eyebrow}</span>
          <div className="header__availability">
            <span aria-hidden="true" />
            {text.availability}
          </div>
          <h1>Shivankar Mehta</h1>
          <div className="header__role">
            <span className="header__role-title">{text.workingAt}</span>
            <a href="https://standardforce.jp/" className="header__role-company" target="_blank" rel="noreferrer">
              Standard Force Corporation
            </a>
          </div>
          <p className="header__lead">
            {text.lead}
          </p>
          <div className="header__focus" aria-label={text.focusAria}>
            {text.focus.map(([title, detail], index) => (
              <div className="header__focus-module" key={title}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
          <div className="header__cta">
            <CTA />
          </div>
        </div>

        <div className="header__visual">
          <div className="observatory">
            <div className="observatory__header">
              <div className="observatory__header-copy">
                <span><i /> {text.observatory}</span>
                <small>Engineering operations overview</small>
              </div>
              <div className="observatory__header-meta">
                <small>{text.productionProfile}</small>
                <strong><i /> Healthy</strong>
              </div>
            </div>
            <div className="observatory__stage">
              <svg className="observatory__fabric" viewBox="0 0 580 376" preserveAspectRatio="none" aria-hidden="true">
                <path className="fabric__route" d="M78 86 H172 C214 86 212 156 286 188" />
                <path className="fabric__route fabric__route--reverse" d="M502 86 H410 C366 86 365 154 294 188" />
                <path className="fabric__route" d="M76 294 H170 C214 294 214 220 286 190" />
                <path className="fabric__route fabric__route--reverse" d="M502 294 H410 C365 294 365 221 294 190" />
                <path className="fabric__route fabric__route--vertical" d="M290 40 V126" />
                <path className="fabric__route fabric__route--vertical" d="M290 336 V250" />
                <path className="fabric__packet fabric__packet--one" pathLength="1" d="M78 86 H172 C214 86 212 156 286 188" />
                <path className="fabric__packet fabric__packet--two" pathLength="1" d="M502 86 H410 C366 86 365 154 294 188" />
                <path className="fabric__packet fabric__packet--three" pathLength="1" d="M76 294 H170 C214 294 214 220 286 190" />
                <path className="fabric__packet fabric__packet--four" pathLength="1" d="M502 294 H410 C365 294 365 221 294 190" />
                <path className="fabric__packet fabric__packet--five" pathLength="1" d="M290 40 V126" />
              </svg>
              <span className="observatory__ring observatory__ring--outer" aria-hidden="true" />
              <span className="observatory__ring observatory__ring--inner" aria-hidden="true" />
              <div className="header__halo">
                <div className="header__image">
                  <img
                    src={ME}
                    alt="Shivankar Mehta"
                    width="1080"
                    height="1350"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
              {stackDomains.map(({ id, orbit, summary }) => (
                <span className={`observatory__node observatory__node--${id}`} key={id}>
                  {orbit}<br /><small>{summary}</small>
                </span>
              ))}
              {observatorySignals.map(({ id, label }) => (
                <span className={`observatory__signal observatory__signal--${id}`} key={id}>
                  {label}
                </span>
              ))}
            </div>
            <div className="observatory__mobile-controls" aria-label="Observatory mobile sections">
              <button
                type="button"
                className={openObservatoryPanel === 'logs' ? 'is-active' : ''}
                onClick={() => toggleObservatoryPanel('logs')}
                aria-expanded={openObservatoryPanel === 'logs'}
                aria-controls="observatory-logs"
              >
                {openObservatoryPanel === 'logs' ? 'Hide activity' : 'Show activity'}
              </button>
              <button
                type="button"
                className={openObservatoryPanel === 'stack' ? 'is-active' : ''}
                onClick={() => toggleObservatoryPanel('stack')}
                aria-expanded={openObservatoryPanel === 'stack'}
                aria-controls="observatory-stack"
              >
                {openObservatoryPanel === 'stack' ? 'Hide technology details' : 'Show technology details'}
              </button>
            </div>
            <div
              id="observatory-logs"
              className={`observatory__console observatory__segment ${openObservatoryPanel === 'logs' ? 'is-mobile-open' : ''}`}
            >
              <div className="console-panel terminal-panel">
                <div className="console-panel__label">
                  <span>Recent activity</span>
                  <small>Last 24 hours</small>
                </div>
                {text.terminalEvents.map((event, index) => (
                  <p key={event}><small>{String(index + 1).padStart(2, '0')}</small>{event}</p>
                ))}
                <p className="console__prompt"><strong>shivankar@systems:~$</strong><i aria-hidden="true" /></p>
              </div>
              <div className="console-panel packet-panel">
                <div className="console-panel__label">
                  <span>Service health</span>
                  <small>Operational</small>
                </div>
                {networkRoutes.map(({ endpoint, protocol, state }) => (
                  <div className="packet-row" key={endpoint}>
                    <i aria-hidden="true" />
                    <code>{endpoint}</code>
                    <small>{protocol}</small>
                    <strong>{state}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="observatory-stack"
              className={`observatory__stack-grid observatory__segment ${openObservatoryPanel === 'stack' ? 'is-mobile-open' : ''}`}
              aria-label={text.fullStack}
            >
              {stackDomains.map(({ id, items }) => (
                <div className={`observatory__stack observatory__stack--${id}`} key={id}>
                  <strong>{text.domains[id]}</strong>
                  <p>{items.join(' / ')}</p>
                </div>
              ))}
            </div>
            <div className="observatory__footer">
              {text.footer.map(([label, value]) => (
                <span key={label}><strong>{label}</strong> {value}</span>
              ))}
            </div>
          </div>
        </div>

        <a className="header__continue" href="#about">
          {text.explore}
          <span aria-hidden="true" />
        </a>

      </div>
      <Headersocials />
    </header>
  )
}

export default Header
