import React from 'react'
import './services.css'
import { ArrowUpRight } from 'lucide-react'
import urbanImage from '../../assets/project-urban.webp'
import dataImage from '../../assets/project-data.webp'
import classroomImage from '../../assets/project-classroom.webp'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const projects = [
  {
    stack: 'Gemini Vision | LangChain | pgvector | SSE',
    image: dataImage
  },
  {
    stack: 'Node.js | MySQL | SSH2 | Cron',
    image: urbanImage,
    link: 'https://github.com/ShivankarMehta/multi-server-data-transfer'
  },
  {
    stack: 'React | Node.js | WebRTC | Python ML',
    image: classroomImage,
    link: 'https://github.com/ShivankarMehta/Online-Classroom-Platform'
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
          {projects.map(({ stack, image, link }, index) => {
            const [title, type, description] = text.modules[index]
            return (
            <article className="service" data-reveal="fade-up" key={title}>
              <span className="service__module">MODULE {String(index + 1).padStart(2, '0')}</span>
              <img className="service__media" src={image} alt="" loading="lazy" decoding="async" />
              <span className="service__timeline">{type}</span>
              <h3>{title}</h3>
              <p className="service__stack">{stack}</p>
              <p className="service__description">{description}</p>
              {link && (
                <a href={link} className="service__link" target="_blank" rel="noreferrer">
                  {text.view} <ArrowUpRight size={17} />
                </a>
              )}
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
