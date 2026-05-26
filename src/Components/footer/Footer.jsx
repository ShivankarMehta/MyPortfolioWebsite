import React from 'react'
import './footer.css'
import { usePreferences } from '../../context/PreferencesContext'

const Footer = () => {
  const { copy } = usePreferences()

  return (
    <footer>
      <div className="container footer__container">
        <a href="#home" className="footer__brand">Shivankar Mehta</a>
        <p>{copy.footer.title}</p>
        <small>&copy; {new Date().getFullYear()} Shivankar Mehta. {copy.footer.rights}</small>
      </div>
    </footer>
  )
}

export default Footer
