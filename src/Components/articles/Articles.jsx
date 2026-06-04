import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, BookOpen, X } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const articles = [
  {
    title: 'Top Causes of MySQL Server Crashes and How to Fix Them (With Real-World Prevention Tips)',
    date: 'Jul 25, 2025',
    topic: 'MySQL / Reliability',
    href: 'https://medium.com/@shivankarmehta60/top-causes-of-mysql-server-crashes-and-how-to-fix-them-with-real-world-prevention-tips-75868d147d93',
    summary: 'A practical reliability note on common MySQL crash causes, prevention habits, configuration checks, and recovery thinking for production systems.',
    points: ['Crash prevention patterns', 'Operational monitoring', 'Database recovery readiness']
  },
  {
    title: 'Brute Force Attack and Its Prevention',
    date: 'Jul 14, 2025',
    topic: 'Security',
    href: 'https://medium.com/@shivankarmehta60/brute-force-attack-and-its-prevention-7c55ff454d51',
    summary: 'Explains brute-force attack behavior and the defensive controls needed in real applications, from lockouts to request throttling.',
    points: ['Authentication hardening', 'Rate limiting', 'Account protection']
  },
  {
    title: 'Hydration failed because the server rendered HTML didn\'t match the client ....',
    date: 'Feb 28, 2025',
    topic: 'Next.js',
    href: 'https://medium.com/@shivankarmehta60/hydration-failed-because-the-server-rendered-html-didnt-match-the-client-85add12feb8b',
    summary: 'A Next.js debugging write-up focused on hydration mismatches, why server and client markup diverge, and how to structure safer rendering.',
    points: ['SSR debugging', 'Client/server boundaries', 'Rendering consistency']
  },
  {
    title: 'Implementing Rate-Limiting (Sliding Window Approach)',
    date: 'Feb 24, 2025',
    topic: 'API Security',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-sliding-window-approach-520567b53f4c',
    summary: 'Breaks down the sliding-window rate-limiting model and how it improves API abuse protection compared with simpler counters.',
    points: ['Sliding window logic', 'API abuse control', 'Request accounting']
  },
  {
    title: 'Implementing Rate-Limiting using Redis in Express.js',
    date: 'Feb 15, 2025',
    topic: 'Redis / Express',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-using-redis-in-express-js-6ce3ff812595',
    summary: 'Shows how Redis can back distributed rate limiting for Express APIs where multiple instances need shared request state.',
    points: ['Redis-backed limits', 'Express middleware', 'Distributed API protection']
  },
  {
    title: 'Implementing Rate Limiting in Express.Js',
    date: 'Feb 13, 2025',
    topic: 'Express.js',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-in-express-js-2d3357363257',
    summary: 'Introduces rate limiting in Express.js applications and why request controls matter for stable backend services.',
    points: ['Express APIs', 'Middleware design', 'Service stability']
  },
  {
    title: 'Implementing Caching in Express.js with Redis',
    date: 'Feb 4, 2025',
    topic: 'Caching / Redis',
    href: 'https://medium.com/@shivankarmehta60/implementing-caching-in-express-js-with-redis-4ade3ab7eaf4',
    summary: 'Covers Redis caching patterns for Express services to reduce repeated work and improve response performance.',
    points: ['Redis cache strategy', 'Express performance', 'Backend optimization']
  },
  {
    title: 'React Server Components (RSC) in Next.js: The Future of Rendering Efficiency',
    date: 'Feb 2, 2025',
    topic: 'React / Next.js',
    href: 'https://medium.com/@shivankarmehta60/react-server-components-rsc-in-next-js-the-future-of-rendering-efficiency-fc78ca6d8919',
    summary: 'Explains React Server Components in Next.js and how server-first rendering can reduce client-side JavaScript work.',
    points: ['React Server Components', 'Next.js architecture', 'Rendering efficiency']
  },
  {
    title: 'Understanding Server-Side Rendering (SSR), Suspense SSR and Code Splitting in Next.js',
    date: 'Jan 29, 2025',
    topic: 'Next.js / SSR',
    href: 'https://medium.com/@shivankarmehta60/understanding-server-side-rendering-ssr-suspense-ssr-and-code-splitting-in-next-js-e1730c3d1096',
    summary: 'A rendering guide covering SSR, Suspense SSR, and code splitting techniques for better Next.js delivery.',
    points: ['Server-side rendering', 'Suspense SSR', 'Code splitting']
  },
  {
    title: 'Understanding Rendering in React and The Client-Side Rendering (CSR) in NEXTJS',
    date: 'Jan 27, 2025',
    topic: 'React / CSR',
    href: 'https://medium.com/@shivankarmehta60/understanding-rendering-in-react-and-the-client-side-rendering-csr-in-nextjs-735b884e0680',
    summary: 'Introduces rendering behavior in React and explains when client-side rendering is useful in Next.js applications.',
    points: ['React rendering', 'CSR tradeoffs', 'Next.js fundamentals']
  },
  {
    title: 'Next.js Rendering Techniques: CSR, SSR and React Server Components',
    date: 'LinkedIn post',
    topic: 'Next.js / Rendering',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/shivankar-mehta-058b29207_nextjs-renderingtechniques-webdevelopment-activity-7291693382710542336-4sSH',
    summary: 'A compact LinkedIn post comparing core rendering approaches in Next.js for practical web development decisions.',
    points: ['CSR', 'SSR', 'React Server Components']
  },
  {
    title: 'Link to Specific Text in Chrome Without an Anchor',
    date: 'LinkedIn post',
    topic: 'Web APIs / UX',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/shivankar-mehta-058b29207_webdevelopment-javascript-frontend-activity-7454083394138972160-hAGJ',
    summary: 'A short web UX note about linking directly to specific text in Chrome when a page does not provide an anchor.',
    points: ['Text fragments', 'Browser UX', 'Shareable references']
  }
]

const buildInSiteBody = (article) => {
  const source = article.source || 'Medium'
  const focus = article.points.join(', ').toLowerCase()

  return [
    `${article.summary} This in-site version is written as a portfolio reading brief, so visitors can understand the technical thinking without leaving the website.`,
    `The core focus is ${focus}. The post connects the topic to production software work: reliability, maintainability, secure defaults, and practical decisions that make systems easier to operate after launch.`,
    `For the complete original publication and comments, the ${source} link is still available. The built-in reader keeps the main idea, engineering context, and implementation takeaways visible inside this portfolio.`
  ]
}

const Articles = () => {
  const { copy } = usePreferences()
  const text = copy.writing
  const [activeIndex, setActiveIndex] = useState(null)
  const activeArticle = activeIndex === null ? null : articles[activeIndex]
  const activeBody = activeArticle ? buildInSiteBody(activeArticle) : []

  const openArticle = (index) => {
    setActiveIndex(index)
  }

  const closeArticle = () => {
    setActiveIndex(null)
  }

  useEffect(() => {
    if (activeIndex === null) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeArticle()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  const articleModal = activeArticle ? (
    <div className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
      <button className="article-modal__backdrop" type="button" aria-label="Close article reader" onClick={closeArticle} />
      <article className="article-modal__panel">
        <div className="article-reader article-reader--modal">
          <div className="article-reader__terminal">
            <span><BookOpen size={16} aria-hidden="true" /> {text.readerLabel}</span>
            <small>{activeArticle.source || 'Medium'} / {activeArticle.topic}</small>
            <button className="article-modal__close" type="button" onClick={closeArticle} aria-label="Close article reader">
              <X size={18} />
            </button>
          </div>
          <div className="article-reader__body" key={activeArticle.href}>
            <div className="article-reader__meta">
              <span className={`article-card__source article-card__source--${(activeArticle.source || 'Medium').toLowerCase()}`}>
                {activeArticle.source || 'Medium'}
              </span>
              <time>{activeArticle.date}</time>
            </div>
            <div className="article-reader__scan" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h3 id="article-modal-title">{activeArticle.title}</h3>
            <p>{activeArticle.summary}</p>
            <div className="article-reader__content">
              {activeBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul>
              {activeArticle.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <a href={activeArticle.href} target="_blank" rel="noreferrer">
              {text.openOriginal} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  ) : null

  return (
    <section id="writing">
      <div className="container os-surface module-panel module-panel--writing">
        <OSWindowBar module="SYS-06 / DOCS" path="/home/shivankar/medium/articles" status={text.status} />
        <div className="articles__heading">
          <div className="section-heading" data-reveal="fade-up">
            <span className="section-kicker">{text.kicker}</span>
            <h2>{text.title}</h2>
          </div>
          <div className="articles__profiles">
            <a className="articles__profile" href="https://medium.com/@shivankarmehta60" target="_blank" rel="noreferrer">
              {text.mediumProfile} <ArrowUpRight size={17} />
            </a>
            <a className="articles__profile" href="https://www.linkedin.com/in/shivankar-mehta-058b29207/" target="_blank" rel="noreferrer">
              {text.linkedinProfile} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="articles__workspace" data-reveal="fade-up">
          <div className="articles__grid">
            {articles.map(({ title, date, topic, source = 'Medium', href }, index) => {
              return (
              <article
                className="article-card"
                key={href}
              >
                <div className="article-card__meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <time>{date}</time>
                </div>
                <div className="article-card__badges">
                  <span className={`article-card__source article-card__source--${source.toLowerCase()}`}>{source}</span>
                  <span className="article-card__topic">{topic}</span>
                </div>
                <h3>{title}</h3>
                <button
                  type="button"
                  onClick={() => openArticle(index)}
                >
                  {text.readInside} <BookOpen size={16} />
                </button>
                <a href={href} target="_blank" rel="noreferrer">
                  {text.openOriginal} <ArrowUpRight size={16} />
                </a>
              </article>
              )
            })}
          </div>
        </div>
      </div>
      {articleModal && createPortal(articleModal, document.body)}
    </section>
  )
}

export default Articles
