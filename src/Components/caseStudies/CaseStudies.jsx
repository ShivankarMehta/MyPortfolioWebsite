import React, { useState } from 'react'
import { ArrowRight, Database, FileSearch, LayoutDashboard, Server } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const caseStudies = [
  {
    icon: <FileSearch size={20} />,
    title: 'AI Document Assistant',
    problem: 'Operational teams needed a faster way to search PDFs, Office files, images, Excel sheets, and audio notes.',
    architecture: ['Upload service', 'OCR/Vision extraction', 'pgvector retrieval', 'LangChain answer stream'],
    impact: 'Turned scattered files into searchable document intelligence with streamed answers and background processing.',
    stack: ['Gemini Vision', 'Tesseract OCR', 'pgvector', 'pg-boss', 'LangChain', 'SSE']
  },
  {
    icon: <Database size={20} />,
    title: 'Distributed ETL Pipeline',
    problem: 'Multiple remote MySQL databases had to be consolidated without exposing production systems directly.',
    architecture: ['Remote MySQL x10', 'SSH2 tunnel', 'Cron batch sync', 'Central warehouse'],
    impact: 'Created a reliable data transfer path for reporting and operational dashboards.',
    stack: ['MySQL', 'SSH2', 'Node.js', 'Cron', 'Docker', 'AlmaLinux']
  },
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Construction Operations Dashboard',
    problem: 'Field teams required budget visibility, logistics tracking, and reporting from one operational interface.',
    architecture: ['Next.js UI', 'API services', 'Redis cache', 'QR logistics events'],
    impact: 'Supported client organizations with real-time alerts, exports, and practical business visibility.',
    stack: ['Next.js', 'Redis', 'Recharts', 'Tremor', 'Excel Export', 'QR Tracking']
  }
]

const architectureNodes = ['Frontend', 'API Layer', 'Workers', 'Database', 'AI/RAG', 'Operations']

const CaseStudies = () => {
  const { language } = usePreferences()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = caseStudies[activeIndex]
  const labels = language === 'ja'
    ? {
      status: 'MAPPED',
      kicker: 'Case Studies',
      title: 'Project decisions, architecture, and impact.',
      problem: 'Problem',
      architecture: 'Architecture',
      impact: 'Impact',
      stack: 'Stack',
      viewer: 'Interactive architecture viewer'
    }
    : {
      status: 'MAPPED',
      kicker: 'Case Studies',
      title: 'Project decisions, architecture, and impact.',
      problem: 'Problem',
      architecture: 'Architecture',
      impact: 'Impact',
      stack: 'Stack',
      viewer: 'Interactive architecture viewer'
    }

  return (
    <section id="case-studies">
      <div className="container os-surface module-panel module-panel--cases">
        <OSWindowBar module="SYS-05 / CASES" path="/projects/architecture/impact" status={labels.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{labels.kicker}</span>
          <h2>{labels.title}</h2>
        </div>

        <div className="case-study-grid" data-reveal="fade-up">
          <div className="case-study-list" aria-label="Project case studies">
            {caseStudies.map((item, index) => (
              <button
                className={`case-study-tab ${activeIndex === index ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                key={item.title}
              >
                <span>{item.icon}</span>
                <strong>{item.title}</strong>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            ))}
          </div>

          <article className="case-study-detail">
            <div className="case-study-terminal">
              <Server size={17} aria-hidden="true" />
              <code>inspect --project="{activeCase.title}" --depth=system</code>
            </div>
            <div className="case-study-block">
              <small>{labels.problem}</small>
              <p>{activeCase.problem}</p>
            </div>
            <div className="case-study-block">
              <small>{labels.architecture}</small>
              <div className="architecture-chain">
                {activeCase.architecture.map((step) => <span key={step}>{step}</span>)}
              </div>
            </div>
            <div className="case-study-block">
              <small>{labels.impact}</small>
              <p>{activeCase.impact}</p>
            </div>
            <div className="case-study-stack" aria-label={labels.stack}>
              {activeCase.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>

          <aside className="architecture-viewer" aria-label={labels.viewer}>
            <div className="architecture-orbit" aria-hidden="true">
              {architectureNodes.map((node, index) => (
                <span style={{ '--node-index': index }} key={node}>{node}</span>
              ))}
              <b>{activeCase.title.split(' ')[0]}</b>
            </div>
            <p>{labels.viewer}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
