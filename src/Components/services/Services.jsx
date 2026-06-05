import React from 'react'
import './services.css'
import { ArrowRight } from 'lucide-react'
import aiDocumentImage from '../../assets/project-ai-document.webp'
import etlPipelineImage from '../../assets/project-etl-pipeline.webp'
import constructionImage from '../../assets/project-construction-management.webp'
import dataImage from '../../assets/project-data.webp'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const projects = [
  {
    stack: 'PDF.js Workers | Gemini | pgvector HNSW | pg-boss | PostgreSQL | SSE',
    image: aiDocumentImage,
    outcome: 'Multi-GB PDF ingestion with token-bounded retrieval',
    visibility: 'Confidential enterprise system'
  },
  {
    stack: 'MySQL | SSH2 | Cron | Docker | AlmaLinux',
    image: etlPipelineImage,
    outcome: 'Multiple databases unified',
    visibility: 'Confidential enterprise system'
  },
  {
    stack: 'AlmaLinux | Budget Alerts | Financial Tracking | Compliance',
    image: constructionImage,
    outcome: '5 client organizations supported',
    visibility: 'Confidential enterprise system'
  },
  {
    stack: 'MCP Server | REST API | MySQL | Intent Routing | Read-only Queries',
    image: dataImage,
    outcome: 'Multiple business databases unified',
    visibility: 'Confidential enterprise system'
  }
]

const Services = () => {
  const { copy } = usePreferences()
  const text = copy.projects

  return (
    <section id="services">
      <div className="container os-surface module-panel module-panel--projects">
        <OSWindowBar module="SYS-04 / BUILDS" path="/opt/projects/services" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="services_container">
          {projects.map(({ stack, image, outcome, visibility }, index) => {
            const [title, type, description] = text.modules[index]
            return (
            <article className="service" data-reveal="fade-up" key={title}>
              <span className="service__module">MODULE {String(index + 1).padStart(2, '0')}</span>
              <img className="service__media" src={image} alt={`${title} project overview`} loading="lazy" decoding="async" />
              <span className="service__timeline">{type}</span>
              <h3>{title}</h3>
              <div className="service__proof">
                <strong>{outcome}</strong>
                <span>{visibility}</span>
              </div>
              <p className="service__stack">{stack}</p>
              <p className="service__description">{description}</p>
              <a className="service__link" href="#case-studies">
                Read case study <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
