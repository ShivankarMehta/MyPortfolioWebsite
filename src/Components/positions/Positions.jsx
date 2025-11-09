import React from 'react'
import './positions.css'
import { BiCheck } from 'react-icons/bi'

const positions = [
  {
    title: 'Founder of a YouTube channel “Integrative Learning”.',
    bullets: [
      'Led a 20-member cross-functional team operating the channel.',
      'Headed overall management and the teaching department.'
    ]
  },
  {
    title: 'Member of Student Coordination Placement Team · IIT Dhanbad',
    bullets: [
      'Served in the communication division of SCPT 2023.',
      'Coordinated with hiring partners and supported assessments and interviews.'
    ]
  },
  {
    title: 'Member of Different Clubs',
    bullets: [
      'Coordinator of Chayanika Sangh, the Hindi literary club of IIT(ISM) Dhanbad.',
      'Co-founder of the student-led organisation “ISM Warriors”.',
      'Additional responsibilities handled confidentially — stay tuned!'
    ]
  }
]

const Positions = () => {
  return (
    <section id='positions' data-reveal="fade-up">
      <h2>PORs</h2>
      <div className="container services_container">
        {positions.map(({ title, bullets }) => (
          <article className='service service--position' data-tilt data-reveal="fade-up" key={title}>
            <div className="services_head">
              <h3>{title}</h3>
            </div>
            <ul className='service_list'>
              {bullets.map((bullet) => (
                <li key={bullet} data-reveal="fade-up">
                  <BiCheck className='service_list-icon' aria-hidden="true" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Positions