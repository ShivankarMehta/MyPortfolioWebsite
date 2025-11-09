import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pc2.jpg'
import IMG2 from '../../assets/pc4.jpg'
import IMG3 from '../../assets/pc5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Software Development Engineer (Full Time)\nStandardforce Corporation · Japan',
    bullets: [
      'Developed a dashboard using React.js and Node.js, improving data visualization and decision-making.',
      'Integrated critical business parameters, boosting operational efficiency.',
      'Improved the Laravel-based business management system, optimizing overseas operations.'
    ],
    meta: '2024 — Present'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fullstack Web Developer (Intern)\nLTU Corporation · Japan',
    bullets: [
      'Built dashboards with React.js + Node.js to support multi-site programme monitoring.',
      'Introduced automation that reduced manual reporting touchpoints for operations teams.',
      'Collaborated on backend enhancements that stabilised legacy PHP/Laravel services.'
    ],
    meta: '2023-2024'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Frontend Web Developer (Intern)\nUrban Reach & Fynii Infotech · India',
    bullets: [
      'Built Urban Reach’s customer portal in React.js to streamline farm-to-market workflows.',
      'Delivered Fynii’s EdTech interface, enabling expert-led learning experiences.',
      'Coordinated deployments and cross-team integration for both platforms.'
    ],
    meta: '2021 — 2022'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio' data-reveal="fade-up">
      <h2>Jobs / Internships</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, bullets, meta }) => (
          <article className='portfolio_item portfolio_item--experience' data-tilt data-reveal="fade-up" key={id}>
            {image && (
              <div className="portfolio_item-image portfolio_item-image--placeholder" data-reveal="zoom-in">
                <img src={image} alt={title} />
              </div>
            )}
            <div className="portfolio_item-content">
              <h3>{title}</h3>
              {meta && <span className="portfolio_item-meta" data-reveal="fade-up">{meta}</span>}
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet} data-reveal="fade-up">{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio