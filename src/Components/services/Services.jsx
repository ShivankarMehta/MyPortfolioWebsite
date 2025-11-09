import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import IMG1 from '../../assets/urban.png'
import IMG2 from '../../assets/pc4.jpg'
import IMG3 from '../../assets/online.png'

const projects = [
  {
    title: 'Web Portal for Agro-Tech Innovator "Urban Reach"',
    stack: 'ReactJS · HTML/CSS · Bootstrap · Netlify',
    timeline: 'Summer 2022',
    image: IMG1,
    bullets: [
      'Built the primary customer-facing portal during my internship, covering product workflows, service offerings, and company insights.',
      'Owned the entire frontend architecture with React Router, reusable UI components, and responsive layouts.',
      'Collaborated on deployment, delivering a production-ready experience hosted on Netlify for ongoing business operations.'
    ],
    github: 'https://github.com/ShivankarMehta/UrbanReach_final_projet-',
    live: 'https://urbanreach.netlify.app/'
  },
  {
    title: 'Multi-Server Data Transfer Tool',
    stack: 'JavaScript · MySQL · Node.js · SSH2',
    timeline: '2025',
    image: IMG2,
    bullets: [
      'Built an automated ETL pipeline to migrate and synchronize data from distributed servers into a central warehouse.',
      'Applied class-based architecture with OOP design patterns for connection pooling, validation, and batching.',
      'Integrated SSH tunneling for secure remote connections plus cron-driven automation and transaction rollback.'
    ],
    github: 'https://github.com/ShivankarMehta/multi-server-data-transfer'
  },
  {
    title: 'Automated Online Classroom Platform',
    stack: 'ReactJS · NodeJS · Python · Machine Learning',
    timeline: 'Hackfest 2022',
    image: IMG3,
    bullets: [
      'Delivered Atlassian’s Hackfest challenge with multi-user video calling, automated attendance, and transcription.',
      'Engineered real-time chat + streaming via WebRTC and Socket.io for collaborative classroom sessions.',
      'Coordinated ML-assisted engagement analytics and onboarding flows for a production-ready demo.'
    ],
    github: 'https://github.com/ShivankarMehta/Online-Classroom-Platform'
  }
]

const Services = () => {
  return (
    <section id='services' data-reveal="fade-up">
      <h2>Project Highlights</h2>
      <div className="container services_container">
        {projects.map(({ title, stack, timeline, bullets, github, live, image }) => (
          <article className='service service--project' data-tilt data-reveal="fade-up" key={title}>
            <div className="service__media" data-reveal="zoom-in">
              <img src={image} alt={title} />
              {timeline && <span className="service__timeline">{timeline}</span>}
            </div>
            <div className="service__content">
              <h3>{title}</h3>
              {stack && <p className="service__stack" data-reveal="fade-up">{stack}</p>}
              <ul className='service__list'>
                {bullets.map((bullet) => (
                  <li key={bullet} data-reveal="fade-up">
                    <BiCheck className='service__list-icon' aria-hidden="true" />
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
              {(github || live) && (
                <div className="service_cta">
                  {github && (
                    <a href={github} className='btn btn-ghost' data-ripple target='_blank' rel='noreferrer'>
                      View GitHub
                    </a>
                  )}
                  {live && (
                    <a href={live} className='btn btn-primary' data-ripple target='_blank' rel='noreferrer'>
                      Visit Live Site
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services