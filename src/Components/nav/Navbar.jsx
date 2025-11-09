import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import './navbar.css'

const links = [
  { id: '#home', label: 'Home' },
  { id: '#about', label: 'About' },
  { id: '#experience', label: 'Skills' },
  { id: '#portfolio', label: 'Jobs/Internships' },
  { id: '#services', label: 'Projects' },
  { id: '#positions', label: 'Positions' },
  { id: '#contact', label: 'Contact' }
]

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      const sections = links
        .map(({ id }) => document.querySelector(id))
        .filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(`#${section.id}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
          Home
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
        <a href="#contact" className="btn btn-primary nav__cta">
          Let&apos;s talk
        </a>
      </div>
    </nav>
  )
}

export default Navbar