import React from 'react'
import './portfolio.css'
import OSWindowBar from '../ui/OSWindowBar'
import standardImage from '../../assets/job-standard.webp'
import ltuImage from '../../assets/job-ltu.webp'
import urbanImage from '../../assets/job-urban.webp'
import { usePreferences } from '../../context/PreferencesContext'

const experience = [
  {
    company: 'Standard Force Corporation',
    image: standardImage
  },
  {
    company: 'Life Team United (LTU Corporation)',
    image: ltuImage
  },
  {
    company: 'Urban Reach & Fynii',
    image: urbanImage
  }
]

const Portfolio = () => {
  const { copy } = usePreferences()
  const text = copy.work

  return (
    <section id="portfolio">
      <div className="container os-surface module-panel module-panel--work">
        <OSWindowBar module="SYS-03 / WORK" path="/var/log/experience.log" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="portfolio_container">
          {experience.map(({ company, image }, index) => {
            const { role, location, dates, bullets } = text.jobs[index]
            return (
            <article className="portfolio_item" data-reveal="fade-up" key={company}>
              <span className="portfolio_item-node" aria-hidden="true" />
              <div className="portfolio_item-header">
                <img className="portfolio_item-image" src={image} alt={`${role} work overview at ${company}`} loading="lazy" decoding="async" />
                <span className="portfolio_item-meta">{dates}</span>
                <h3>{role}</h3>
                <p className="portfolio_item-company">{company}</p>
                <p className="portfolio_item-location">{location}</p>
              </div>
              <ul>
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
