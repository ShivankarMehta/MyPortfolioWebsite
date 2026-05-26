import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const articles = [
  {
    title: 'Top Causes of MySQL Server Crashes and How to Fix Them (With Real-World Prevention Tips)',
    date: 'Jul 25, 2025',
    topic: 'MySQL / Reliability',
    href: 'https://medium.com/@shivankarmehta60/top-causes-of-mysql-server-crashes-and-how-to-fix-them-with-real-world-prevention-tips-75868d147d93'
  },
  {
    title: 'Brute Force Attack and Its Prevention',
    date: 'Jul 14, 2025',
    topic: 'Security',
    href: 'https://medium.com/@shivankarmehta60/brute-force-attack-and-its-prevention-7c55ff454d51'
  },
  {
    title: 'Hydration failed because the server rendered HTML didn\'t match the client ....',
    date: 'Feb 28, 2025',
    topic: 'Next.js',
    href: 'https://medium.com/@shivankarmehta60/hydration-failed-because-the-server-rendered-html-didnt-match-the-client-85add12feb8b'
  },
  {
    title: 'Implementing Rate-Limiting (Sliding Window Approach)',
    date: 'Feb 24, 2025',
    topic: 'API Security',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-sliding-window-approach-520567b53f4c'
  },
  {
    title: 'Implementing Rate-Limiting using Redis in Express.js',
    date: 'Feb 15, 2025',
    topic: 'Redis / Express',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-using-redis-in-express-js-6ce3ff812595'
  },
  {
    title: 'Implementing Rate Limiting in Express.Js',
    date: 'Feb 13, 2025',
    topic: 'Express.js',
    href: 'https://medium.com/@shivankarmehta60/implementing-rate-limiting-in-express-js-2d3357363257'
  },
  {
    title: 'Implementing Caching in Express.js with Redis',
    date: 'Feb 4, 2025',
    topic: 'Caching / Redis',
    href: 'https://medium.com/@shivankarmehta60/implementing-caching-in-express-js-with-redis-4ade3ab7eaf4'
  },
  {
    title: 'React Server Components (RSC) in Next.js: The Future of Rendering Efficiency',
    date: 'Feb 2, 2025',
    topic: 'React / Next.js',
    href: 'https://medium.com/@shivankarmehta60/react-server-components-rsc-in-next-js-the-future-of-rendering-efficiency-fc78ca6d8919'
  },
  {
    title: 'Understanding Server-Side Rendering (SSR), Suspense SSR and Code Splitting in Next.js',
    date: 'Jan 29, 2025',
    topic: 'Next.js / SSR',
    href: 'https://medium.com/@shivankarmehta60/understanding-server-side-rendering-ssr-suspense-ssr-and-code-splitting-in-next-js-e1730c3d1096'
  },
  {
    title: 'Understanding Rendering in React and The Client-Side Rendering (CSR) in NEXTJS',
    date: 'Jan 27, 2025',
    topic: 'React / CSR',
    href: 'https://medium.com/@shivankarmehta60/understanding-rendering-in-react-and-the-client-side-rendering-csr-in-nextjs-735b884e0680'
  },
  {
    title: 'Next.js Rendering Techniques: CSR, SSR and React Server Components',
    date: 'LinkedIn post',
    topic: 'Next.js / Rendering',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/shivankar-mehta-058b29207_nextjs-renderingtechniques-webdevelopment-activity-7291693382710542336-4sSH'
  },
  {
    title: 'Link to Specific Text in Chrome Without an Anchor',
    date: 'LinkedIn post',
    topic: 'Web APIs / UX',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/shivankar-mehta-058b29207_webdevelopment-javascript-frontend-activity-7454083394138972160-hAGJ'
  }
]

const Articles = () => {
  const { copy } = usePreferences()
  const text = copy.writing

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
        <div className="articles__grid">
          {articles.map(({ title, date, topic, source = 'Medium', href }, index) => (
            <article className="article-card" data-reveal="fade-up" key={href}>
              <div className="article-card__meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <time>{date}</time>
              </div>
              <div className="article-card__badges">
                <span className={`article-card__source article-card__source--${source.toLowerCase()}`}>{source}</span>
                <span className="article-card__topic">{topic}</span>
              </div>
              <h3>{title}</h3>
              <a href={href} target="_blank" rel="noreferrer">
                {text.read} <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
