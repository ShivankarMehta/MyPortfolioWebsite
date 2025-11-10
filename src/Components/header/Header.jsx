import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.webp'
import Headersocials from './Headersocials'
import { HiOutlineSparkles } from 'react-icons/hi'
import { FiServer, FiLayers } from 'react-icons/fi'

const stats = [
  {
    value: '2+ Years',
    label: 'Hands-on building software systems',
    icon: <HiOutlineSparkles />
  },
  {
    value: '6+ Deployments',
    label: 'Enterprise systems launched',
    icon: <FiServer />
  },
  {
    value: 'Platforms',
    label: 'Dashboards • CMS • Data pipelines',
    icon: <FiLayers />
  }
]

const skills = [
  'JavaScript',
  'C++',
  'SQL',
  'ReactJS',
  'Next.js',
  'HTML',
  'CSS',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'REST API',
  'WebSockets',
  'MySQL',
  'MongoDB',
  'Redis',
  'AlmaLinux',
  'CentOS',
  'Server Management',
  'Git',
  'Sakura Internet',
  'System Design',
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Computer Networks',
  'Operating Systems'
]

const Header = () => {
  return (
    <header id='home' data-reveal="fade-in">
      <div className="container header__container">
        <div className="header__content" data-reveal="fade-up">
          <h1>Shivankar Mehta</h1>
          <div className="header__role" data-reveal="fade-up">
            <span className="header__role-title">Software &amp; System Engineer</span>
            <a
              href="https://standardforce.jp/"
              className="header__role-company"
              target="_blank"
              rel="noreferrer"
            >
              Standardforce Corporation · Japan 🇯🇵
            </a>
          </div>
          <p className="header__lead">
            Currently I’m building and maintaining enterprise-grade construction management and data systems
            deployed across multiple client organizations. My focus is crafting scalable, data-driven dashboards,
            optimising backend workflows, and ensuring system reliability and performance so Standardforce teams
            can deliver dependable tooling for construction intelligence across Japan.
          </p>
          <div className="header__cta" data-reveal="fade-up">
            <CTA />
          </div>
          <span className="header__spotlight header__spotlight--one" aria-hidden="true" />
          <span className="header__spotlight header__spotlight--two" aria-hidden="true" />
        </div>
        <div className="header__stats" data-reveal="fade-up">
          {stats.map(({ value, label, icon }) => (
            <div className="header__stat glass-card" data-reveal="zoom-in" key={`${value}-${label}`}>
              <span className="header__stat-icon" aria-hidden="true">
                {icon}
              </span>
              <div className="header__stat-copy">
                <span className="header__stat-value">{value}</span>
                <span className="header__stat-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="header__visual" data-reveal="zoom-in">
          <span className="header__visual-glow header__visual-glow--one" aria-hidden="true" />
          <span className="header__visual-glow header__visual-glow--two" aria-hidden="true" />
          <div className="header__halo">
            <div className="header__image">
              <img src={ME} alt="Portrait of Shivankar" />
            </div>
          </div>
        </div>
        <div className="header__ticker" aria-hidden="true" data-reveal="slide-left">
          <div className="header__ticker-track">
            {[...skills, ...skills].map((skill, index) => (
              <span className="header__ticker-chip" key={`${skill}-${index}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Headersocials />
    </header>
  )
}

export default Header