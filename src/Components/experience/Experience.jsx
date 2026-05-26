import React from 'react'
import './experience.css'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const technicalSkills = [
  {
    items: ['ReactJS', 'NextJS', 'JavaScript', 'HTML/CSS', 'Recharts', 'Tremor', 'Browser APIs']
  },
  {
    items: ['Operating Systems', 'Computer Networks', 'NodeJS', 'REST APIs', 'WebSockets', 'SSH2', 'MySQL', 'Redis']
  },
  {
    items: ['RAG', 'Gemini API', 'LangChain', 'pgvector', 'OCR', 'Docker', 'CI/CD', 'AlmaLinux']
  }
]

const Experience = () => {
  const { copy } = usePreferences()
  const text = copy.skills

  return (
    <section id="experience">
      <div className="container os-surface module-panel module-panel--skills">
        <OSWindowBar module="SYS-02 / STACK" path="/dev/skills/modules" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="experience_container">
          {technicalSkills.map(({ items }, index) => {
            const [category, note] = text.categories[index]
            return (
            <article className="experience_details" data-reveal="fade-up" key={category}>
              <div className="experience_details-header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{category}</h3>
                  <small>{note}</small>
                </div>
              </div>
              <ul className="experience_details-list">
                {items.map((name) => <li key={name}>{name}</li>)}
              </ul>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
