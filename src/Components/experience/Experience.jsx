import React, { useMemo, useState } from 'react'
import './experience.css'
import { Filter, Search } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const technicalSkills = [
  {
    items: ['JavaScript', 'TypeScript', 'C++', 'SQL', 'Python']
  },
  {
    items: ['ReactJS', 'NextJS', 'HTML', 'CSS', 'Recharts', 'Tremor', 'Nivo', 'Browser APIs']
  },
  {
    items: ['NodeJS', 'ExpressJS', 'REST APIs', 'SSH2', 'WebSockets', 'Streams', 'Clusters']
  },
  {
    items: ['MySQL', 'PostgreSQL', 'Redis', 'pgvector', 'pg-boss', 'ETL Pipelines', 'Query Optimization']
  },
  {
    items: ['MCP Server', 'LLM Integration', 'RAG', 'Gemini API', 'LangChain', 'Document Intelligence', 'Tesseract OCR']
  },
  {
    items: ['AlmaLinux', 'CentOS', 'Git', 'CI/CD', 'Docker', 'Server Management', 'Sakura Internet']
  }
]

const capabilityTracks = [
  {
    name: 'Frontend',
    tags: ['ReactJS', 'NextJS', 'HTML', 'CSS', 'Recharts', 'Tremor', 'Nivo'],
    proof: 'Dashboards, reporting interfaces, QR logistics UI, and responsive business systems.'
  },
  {
    name: 'Backend',
    tags: ['NodeJS', 'ExpressJS', 'REST APIs', 'WebSockets', 'Streams', 'Clusters'],
    proof: 'API services, request handling, streamed AI responses, and production service wiring.'
  },
  {
    name: 'Data',
    tags: ['MySQL', 'PostgreSQL', 'Redis', 'pgvector', 'ETL', 'Query Optimization'],
    proof: 'Remote database sync, warehouse consolidation, cache-backed dashboards, and retrieval storage.'
  },
  {
    name: 'AI',
    tags: ['Gemini API', 'LangChain', 'RAG', 'OCR', 'Tesseract', 'Document Intelligence'],
    proof: 'Document assistant workflows for PDFs, Office files, images, Excel uploads, and audio processing.'
  },
  {
    name: 'Systems',
    tags: ['AlmaLinux', 'Docker', 'Git', 'SSH2', 'Server Management', 'Sakura Internet'],
    proof: 'Server deployment, secure tunneling, production sync jobs, and operations reliability.'
  },
  {
    name: 'Product',
    tags: ['Construction Tech', 'Dashboards', 'Reports', 'Client Workflows', 'System Design'],
    proof: 'Business systems for construction operations, financial tracking, and field information access.'
  }
]

const Experience = () => {
  const { copy, language } = usePreferences()
  const text = copy.skills
  const [activeCapability, setActiveCapability] = useState('All')
  const capabilityLabels = language === 'ja'
    ? {
      title: 'Filter by engineering capability',
      all: 'All',
      command: 'stack.filter --capability='
    }
    : {
      title: 'Filter by engineering capability',
      all: 'All',
      command: 'stack.filter --capability='
    }
  const capabilityFilters = [capabilityLabels.all, ...capabilityTracks.map((track) => track.name)]
  const visibleCapabilities = useMemo(
    () => activeCapability === capabilityLabels.all
      ? capabilityTracks
      : capabilityTracks.filter((track) => track.name === activeCapability),
    [activeCapability, capabilityLabels.all]
  )

  return (
    <section id="experience">
      <div className="container os-surface module-panel module-panel--skills">
        <OSWindowBar module="SYS-02 / STACK" path="/dev/skills/modules" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="experience_container">
          {technicalSkills.map(({ items }, index) => {
            const [category, note] = text.categories[index]
            return (
            <article className="experience_details" data-reveal="fade-up" key={category}>
              <div className="experience_details-header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{category}</h3>
                  <small>{note}</small>
                </div>
              </div>
              <ul className="experience_details-list">
                {items.map((name) => <li key={name}>{name}</li>)}
              </ul>
            </article>
            )
          })}
        </div>
        <div className="profile-matrix profile-matrix--embedded" data-reveal="fade-up">
          <div className="profile-matrix__head">
            <h3>{capabilityLabels.title}</h3>
            <div className="profile-matrix__command">
              <Search size={16} aria-hidden="true" />
              <code>{capabilityLabels.command}{activeCapability.toLowerCase()}</code>
            </div>
          </div>
          <div className="profile-matrix__filters" aria-label="Profile capability filters">
            <Filter size={16} aria-hidden="true" />
            {capabilityFilters.map((filter) => (
              <button
                className={activeCapability === filter ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveCapability(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="profile-matrix__grid">
            {visibleCapabilities.map((track) => (
              <article className="profile-signal" key={track.name}>
                <strong>{track.name}</strong>
                <p>{track.proof}</p>
                <div>
                  {track.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
