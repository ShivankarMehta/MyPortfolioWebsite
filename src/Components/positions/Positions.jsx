import React from 'react'
import './positions.css'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'
import LeetCodeProfile from './LeetCodeProfile'

const Positions = () => {
  const { copy } = usePreferences()
  const text = copy.achievements

  return (
    <section id="positions">
      <div className="container os-surface module-panel module-panel--records">
        <OSWindowBar module="SYS-07 / RECORDS" path="/etc/achievements.conf" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <div className="positions_container">
          {text.items.map(([value, title, detail]) => (
            <article className="position_card" data-reveal="fade-up" key={title}>
              <strong>{value}</strong>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <LeetCodeProfile text={text} />
      </div>
    </section>
  )
}

export default Positions
