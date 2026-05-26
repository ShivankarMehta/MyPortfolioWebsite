import React from 'react'
import './about.css'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const About = () => {
  const { copy } = usePreferences()
  const text = copy.about

  return (
    <section id="about">
      <div className="container about__container os-surface module-panel module-panel--profile">
        <OSWindowBar module="SYS-01 / PROFILE" path="/usr/shivankar/about.profile" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="about__content" data-reveal="fade-up">
          {text.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="about__metrics" data-reveal="fade-up">
          {text.credentials.map(([title, detail, meta]) => (
            <article className="about__metric" key={title}>
              <span>{title}</span>
              <p>{detail}</p>
              <small>{meta}</small>
            </article>
          ))}
        </div>
        <div className="system-flow" data-reveal="fade-up" aria-label={text.flowLabel}>
          <div className="system-flow__title">{text.flowTitle}</div>
          <div className="system-flow__path">
            {text.flow.map(([label, detail], index) => (
              <React.Fragment key={label}>
                <span><strong>{label}</strong><small>{detail}</small></span>
                {index < text.flow.length - 1 && <i aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
