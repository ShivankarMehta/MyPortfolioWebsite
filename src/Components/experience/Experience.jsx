import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Code2, Code, Braces, Database, Globe, LayoutTemplate, Palette, Cpu, Server, Workflow } from 'lucide-react'

const technicalSkills = [
  {
    category: 'Frontend',
    intro: 'Elegant interfaces and interactions inspired by modern design systems.',
    items: [
      { name: 'ReactJS', icon: <Globe size={18} /> },
      { name: 'NextJS', icon: <LayoutTemplate size={18} /> },
      { name: 'JavaScript', icon: <Code2 size={18} /> },
      { name: 'HTML', icon: <Palette size={18} /> },
      { name: 'CSS / Tailwind', icon: <Braces size={18} /> },
      { name: 'Bootstrap', icon: <Cpu size={18} /> }
    ]
  },
  {
    category: 'Backend & DevOps',
    intro: 'Reliable services and automation that keep complex systems running.',
    items: [
      { name: 'NodeJS', icon: <Server size={18} /> },
      { name: 'ExpressJS', icon: <Server size={18} /> },
      { name: 'REST API & WebSockets', icon: <Workflow size={18} /> },
      { name: 'AlmaLinux & CentOS', icon: <Server size={18} /> },
      { name: 'Server Management', icon: <Server size={18} /> },
      { name: 'Git & CI/CD Practices', icon: <Code size={18} /> }
    ]
  },
  {
    category: 'Data & Platforms',
    intro: 'Data transport, caching, and modeling that power decision-making.',
    items: [
      { name: 'MySQL', icon: <Database size={18} /> },
      { name: 'MongoDB', icon: <Database size={18} /> },
      { name: 'Redis', icon: <Database size={18} /> },
      { name: 'Sakura Internet Cloud', icon: <Globe size={18} /> },
      { name: 'System Design', icon: <Code size={18} /> },
      { name: 'DSA / OOP / OS / Networks', icon: <Code2 size={18} /> }
    ]
  }
]

const Experience = () => {
  return (
    <section id='experience' data-reveal="fade-up">
      <h2>Technical Skills</h2>
      <div className='container experience_container experience_container--skills'>
        {technicalSkills.map(({ category, intro, items }) => (
          <article className='experience_details experience_details--skills' data-reveal="fade-up" key={category}>
            <div className="experience_details-header">
              <BsPatchCheckFill className='experience-details-icons' aria-hidden="true" />
              <h3>{category}</h3>
            </div>
            <p className="experience_details-intro">{intro}</p>
            <ul className='experience_details-list'>
              {items.map(({ name, icon }) => (
                <li key={name} data-reveal="fade-up">
                  <span className="experience_details-icon">{icon}</span>
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience