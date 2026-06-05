import React, { useState, useEffect } from 'react'
import { Languages, Menu, Moon, Sun } from 'lucide-react'
import './navbar.css'
import { usePreferences } from '../../context/PreferencesContext'

const linkIds = ['#home', '#services', '#case-studies', '#about', '#portfolio', '#experience', '#writing', '#github', '#positions', '#contact']

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { copy, language, theme, toggleLanguage, toggleTheme } = usePreferences()
  const links = linkIds.map((id, index) => ({ id, label: copy.nav.links[index] }))

  useEffect(() => {
    let scrollFrame

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120
      const sections = linkIds
        .map((id) => document.querySelector(id))
        .filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav((current) => current === `#${section.id}` ? current : `#${section.id}`)
          break
        }
      }

      scrollFrame = undefined
    }

    const handleScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame)
      }
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const handleNavClick = (id) => {
    setActiveNav(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => handleNavClick('#home')}>
          {copy.nav.links[0]}
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu size={22} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <ul
          id="primary-navigation"
          className={`nav__links ${isMenuOpen ? 'nav__links--open' : ''}`}
        >
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={id}
                className={activeNav === id ? 'active' : ''}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__utilities" aria-label="Display preferences">
          <button className="nav__control" type="button" onClick={toggleLanguage} aria-label={copy.nav.language}>
            <Languages size={16} aria-hidden="true" />
            {language === 'en' ? 'JA' : 'EN'}
          </button>
          <button
            className="nav__control nav__control--icon"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? copy.nav.themeLight : copy.nav.themeDark}
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </div>
        <a href="#contact" className="btn btn-primary nav__cta">
          {copy.nav.contact}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
