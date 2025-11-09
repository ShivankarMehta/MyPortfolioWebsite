import React from 'react'
import './about.css'
import ME from '../../assets/profile1.png'

const About = () => {
  return (
    <section id='about' data-reveal="fade-up">
      <div className="container about__container">
        <div className="about__visual" data-reveal="zoom-in">
          <div className="about__glow about__glow--one" aria-hidden="true" />
          <div className="about__glow about__glow--two" aria-hidden="true" />
          <div className="about__frame">
            <div className="about__image">
              <img src={ME} alt="Shivankar speaking at an event" />
            </div>
          </div>
          <div className="about__floating-card">
            <span className="about__floating-label">Current role</span>
            <p>
              Software &amp; System Engineer {' '}
              <a href="https://standardforce.jp/" target="_blank" rel="noreferrer">
                Standardforce Corporation, Japan
              </a>
            </p>
          </div>
        </div>

        <div className="about__content" data-reveal="fade-up">
          <p>
            Hi, I&apos;m Shivankar Mehta, a passionate full stack developer with a Bachelor of Technology in
            Mechanical Engineering from the Indian Institute of Technology (ISM) Dhanbad. My journey from
            mechanical systems to digital ecosystems reflects a love for building—whether it&apos;s machines or
            scalable software solutions.
          </p>
          <p>
            I specialise in ReactJS, NextJS, NodeJS, MySQL, and Redis, crafting robust web applications and
            enterprise dashboards that bring data, design, and performance together. I enjoy solving
            real-world problems through clean architecture, OOP principles, and system design thinking.
          </p>
          <p>
            Currently, I work as a Software Developer and System Engineer at{' '}
            <a href="https://standardforce.jp/" target="_blank" rel="noreferrer">
              Standardforce Corporation
            </a>{' '}
            in Japan, where I design and maintain enterprise-level construction management systems and data
            integration tools. Previously, I interned with Life Team United (Japan) and Urban Reach &amp; Fynii
            (India), gaining hands-on experience building full-stack dashboards and supply chain management
            platforms.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About