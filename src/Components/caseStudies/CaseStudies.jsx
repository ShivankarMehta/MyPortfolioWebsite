import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Database, FileSearch, LayoutDashboard, ServerCog } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'
import aiDocumentImage from '../../assets/project-ai-document.webp'
import etlPipelineImage from '../../assets/project-etl-pipeline.webp'
import constructionImage from '../../assets/project-construction-management.webp'
import dataImage from '../../assets/project-data.webp'

const caseStudies = [
  {
    icon: <FileSearch size={20} />,
    title: 'CHiE — Comachi Hyper Intelligence Encyclopedia',
    problem: 'Construction, home-building, renovation, finance, and operations teams work with thousands of PDFs, PowerPoint files, Office documents, supplier catalogs, specifications, estimates, and macro-enabled workbooks. Finding a reliable answer required opening files individually, while GB-scale PDFs created memory pressure, long processing times, token-limit risks, and avoidable AI costs.',
    role: 'Designed and implemented the enterprise document-intelligence architecture, including company-scoped corpora, resumable multipart uploads for multi-GB PDFs, the streaming ingest pipeline, durable background jobs, token-bounded semantic retrieval, streamed AI chat, and Excel Macro AI workflows.',
    constraints: ['Multi-GB PDFs and ZIP uploads without buffering entire files in application memory', 'Thousands of mixed-format documents isolated by company', 'Keep model context within strict token budgets while preserving answer relevance', 'Avoid Gemini timeouts, embedding TPM spikes, duplicate processing, and lost jobs'],
    decisions: ['Use resumable multipart uploads plus PDF.js worker threads with range and stream loading', 'Extract page-by-page and progressively index approximately 50K-character segments before parallel embedding', 'Use SHA-256 deduplication, durable pg-boss jobs, and deferred Gemini Vision or OCR only when text extraction fails', 'Embed each query once, retrieve company-filtered top-K HNSW matches, and assemble only the highest-value chunks within a configurable token budget'],
    architecture: ['Resumable multi-GB upload', 'Streaming extraction + ProgressiveIndexer', 'pgvector HNSW + token budget', 'Grounded SSE chat + Excel Macro AI'],
    impact: 'CHiE (Comachi Hyper Intelligence Encyclopedia) turns large enterprise document collections into searchable, conversational knowledge. Teams can upload multi-GB PDFs, manage company-scoped libraries, ask grounded questions across thousands of files, inspect or edit .xlsm workflows with Gemini assistance, and receive fast answers without sending entire documents to the model.',
    results: ['Multi-GB PDFs processed incrementally with bounded memory usage', 'Sub-second semantic retrieval with only relevant chunks placed inside the model token budget', 'Lower ingest cost through SHA-256 deduplication and deferred Vision / OCR', 'Restart-safe processing with live SSE progress and durable background jobs'],
    stack: ['Multipart Uploads', 'PDF.js Workers', 'ProgressiveIndexer', 'Gemini', 'PostgreSQL', 'pgvector HNSW', 'Token Budgeting', 'pg-boss', 'SHA-256', 'SSE', 'Excel Macro AI'],
    image: aiDocumentImage
  },
  {
    icon: <Database size={20} />,
    title: 'Distributed ETL Pipeline',
    problem: 'Multiple remote MySQL databases had to be consolidated without exposing production systems directly.',
    role: 'Architected and delivered the secure synchronization path, batch orchestration, and warehouse data flow.',
    constraints: ['Remote databases behind restricted networks', 'No direct production exposure', 'Repeatable batch recovery'],
    decisions: ['Tunnel database traffic with SSH2', 'Use scheduled batch synchronization', 'Centralize reporting workloads'],
    architecture: ['Remote MySQL sources', 'SSH2 tunnel', 'Cron batch sync', 'Central warehouse'],
    impact: 'Created a reliable data transfer path for reporting and operational dashboards.',
    results: ['Multiple remote databases consolidated', 'Central reporting source established', 'Secure production access maintained'],
    stack: ['MySQL', 'SSH2', 'Node.js', 'Cron', 'Docker', 'AlmaLinux'],
    image: etlPipelineImage
  },
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Stance ERP Operations Dashboard',
    problem: 'Sales, accounting, procurement, inventory, logistics, estimating, and field teams needed a shared operational view over Stance ERP data stored in MySQL. Existing workflows required teams to navigate fragmented reports and manually prepare business data for analysis, invoicing, logistics, and accounting integrations.',
    role: 'Built the Next.js 16 analytics platform over Stance ERP, delivering dashboard workflows, more than 100 APIs, permission-aware components, reporting exports, ERP deep links, QR logistics tools, and Gemini-assisted SQL workflows.',
    constraints: ['Large and diverse ERP datasets across business functions', 'More than 100 APIs requiring maintainable ownership boundaries', 'Dashboard availability even when the Redis cache is unavailable'],
    decisions: ['Split functionality into independently loaded widgets and centralize business logic under app/lib', 'Use Redis caching and Cron jobs for sales snapshots while preserving fallback behavior', 'Provide PDF, Excel, spreadsheet, Freee, QR, voice-search, and ERP deep-link workflows'],
    architecture: ['Stance ERP / MySQL', '100+ API services', 'Next.js 16 widgets', 'Redis + Cron resilience'],
    impact: 'Created a shared operational platform where sales, accounting, and field teams can understand and act on ERP data from one interface, reducing report-preparation effort and improving access to sales, receivables, procurement, inventory, logistics, estimating, pricing, and accounting information.',
    results: ['Sales, gross-profit, forecast, ranking, and anomaly-analysis workflows', 'Receivables, payments, purchasing, payables, inventory, QR logistics, and delivery reporting', 'Freee, spreadsheet, PDF, and Excel exports with Gemini AI SQL assistance'],
    stack: ['Next.js 16', 'MySQL', 'Redis', 'Cron', 'Gemini AI SQL', 'PDF / Excel', 'Freee Export', 'QR Tracking'],
    image: constructionImage
  },
  {
    icon: <ServerCog size={20} />,
    title: 'Business Database MCP Server',
    problem: 'Teams needed fast and safe answers from large operational databases covering estimates, sales, inventory, logistics, payments, and invoicing without writing SQL or creating one-off scripts. The required information was distributed across multiple business databases and approximately 117 documented tables.',
    role: 'Designed and implemented a read-only MCP and REST API server that accepts natural-language questions in Japanese and English, routes each request to standardized business-data tools, and returns structured responses for AI clients.',
    constraints: ['Multiple operational databases and approximately 117 documented tables', 'Strict read-only access with predictable response limits', 'Bilingual questions spanning shared customer, supplier, product, project, warehouse, owner, and date filters'],
    decisions: ['Route intent through run_standard_query instead of allowing the LLM to generate SQL', 'Use optimized predefined queries and direct tool invocation for speed and lower cost', 'Enforce read-only execution, common filters, and bounded responses for safety'],
    architecture: ['AI client / natural language', 'MCP + REST API', 'Intent router + standard tools', 'Multiple business databases'],
    impact: 'Unified safe access to estimates, sales, purchasing, payments, inventory, logistics, invoicing, products, and job-site data so teams can answer operational questions without ad hoc SQL or custom scripts.',
    results: ['Estimate, sales, customer, supplier, product, department, monthly, and annual summaries', 'Current stock, warehouse summaries, allocations, loading, shipping, delivery, payment, and invoice checks', 'Fast, safe, low-cost answers through optimized read-only tools and response limits'],
    stack: ['MCP Server', 'REST API', 'MySQL', 'run_standard_query', 'Intent Routing', 'Read-only Tools', 'Japanese / English'],
    image: dataImage
  }
]

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
      role: 'My contribution',
      constraints: 'Constraints',
      decisions: 'Engineering decisions',
      impact: 'Impact',
      results: 'Measured outcomes',
      stack: 'Stack',
      viewer: 'Interactive architecture viewer'
    }
    : {
      status: 'MAPPED',
      kicker: 'Case Studies',
      title: 'Project decisions, architecture, and impact.',
      problem: 'Problem',
      architecture: 'Architecture',
      role: 'My contribution',
      constraints: 'Constraints',
      decisions: 'Engineering decisions',
      impact: 'Impact',
      results: 'Measured outcomes',
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
                aria-pressed={activeIndex === index}
                key={item.title}
              >
                <span className="case-study-tab__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="case-study-tab__icon">{item.icon}</span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.results[0]}</small>
                </span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            ))}
          </div>

          <article className="case-study-detail">
            <div className="case-study-hero">
              <div className="case-study-hero__visual">
                <img className="case-study-detail__image" src={activeCase.image} alt={`${activeCase.title} architecture overview`} loading="lazy" decoding="async" />
              </div>
              <div className="case-study-hero__copy">
                <span>Enterprise case study · {String(activeIndex + 1).padStart(2, '0')}</span>
                <h3>{activeCase.title}</h3>
                <p>{activeCase.impact}</p>
                <div className="case-study-stack" aria-label={labels.stack}>
                  {activeCase.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>

            <div className="case-study-results" aria-label={labels.results}>
              {activeCase.results.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="case-study-narrative">
              <div className="case-study-block">
                <small>{labels.problem}</small>
                <p>{activeCase.problem}</p>
              </div>
              <div className="case-study-block">
                <small>{labels.role}</small>
                <p>{activeCase.role}</p>
              </div>
            </div>

            <div className="case-study-block case-study-block--split">
              <div>
                <small>{labels.constraints}</small>
                <ul>{activeCase.constraints.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <small>{labels.decisions}</small>
                <ul>{activeCase.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>

            <div className="case-study-block case-study-architecture">
              <small>{labels.architecture}</small>
              <div className="architecture-chain">
                {activeCase.architecture.map((step) => <span key={step}>{step}</span>)}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
