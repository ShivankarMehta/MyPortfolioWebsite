import React, { useEffect, useState } from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/nav/Navbar'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/services/Services'
import GithubProfile from './Components/github/GithubProfile'
import Articles from './Components/articles/Articles'
import Positions from './Components/positions/Positions'
import Contact from './Components/contact/Contact'
import BusinessCard from './Components/business/BusinessCard'
import Footer from './Components/footer/Footer'
import BootLoader from './Components/ui/BootLoader'
import './refresh.css'

const App = () => {
  const [isBooting, setIsBooting] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!isBooting) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => setIsBooting(false), 2200)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timer)
    }
  }, [isBooting])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const shouldReduce = mediaQuery.matches
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (shouldReduce) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return undefined
    }

    const interactiveSelector = [
      '.observatory',
      '.module-panel',
      '.header__focus-module',
      '.about__metric',
      '.system-flow__path span',
      '.portfolio_item',
      '.service',
      '.github__repo',
      '.experience_details',
      '.article-card',
      '.position_card',
      '.business-card__container',
      '.contact_option'
    ].join(', ')
    let animationFrame
    let pointerEvent

    const updatePointerLight = () => {
      const panel = pointerEvent?.target.closest?.(interactiveSelector)

      if (panel) {
        const bounds = panel.getBoundingClientRect()
        const pointerX = ((pointerEvent.clientX - bounds.left) / bounds.width) * 100
        const pointerY = ((pointerEvent.clientY - bounds.top) / bounds.height) * 100
        const tiltX = ((50 - pointerY) / 50) * 2.2
        const tiltY = ((pointerX - 50) / 50) * 3.1

        panel.style.setProperty('--pointer-x', `${pointerX}%`)
        panel.style.setProperty('--pointer-y', `${pointerY}%`)
        panel.style.setProperty('--tilt-x', `${tiltX}deg`)
        panel.style.setProperty('--tilt-y', `${tiltY}deg`)
      }

      animationFrame = undefined
    }

    const handlePointerMove = (event) => {
      pointerEvent = event

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updatePointerLight)
      }
    }

    document.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mousemove', handlePointerMove, { passive: true })

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mousemove', handlePointerMove)
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return undefined
    }

    let scrollFrame

    const updateScrollTelemetry = () => {
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollRange > 0 ? Math.min(window.scrollY / scrollRange, 1) : 0

      document.documentElement.style.setProperty('--scroll-progress', `${progress}`)

      scrollFrame = undefined
    }

    const handleScrollTelemetry = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScrollTelemetry)
      }
    }

    updateScrollTelemetry()
    window.addEventListener('scroll', handleScrollTelemetry, { passive: true })
    window.addEventListener('resize', handleScrollTelemetry, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollTelemetry)
      window.removeEventListener('resize', handleScrollTelemetry)
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame)
      }
    }
  }, [])

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll('.module-panel'))
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      panels.forEach((panel) => panel.classList.add('is-active', 'is-entered'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-active', entry.isIntersecting)
          if (entry.isIntersecting) {
            entry.target.classList.add('is-entered')
          }
        })
      },
      {
        root: null,
        threshold: 0.04,
        rootMargin: '150px 0px'
      }
    )

    panels.forEach((panel) => observer.observe(panel))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {isBooting && <BootLoader />}
      <div
        className={`site-shell ${isBooting ? 'is-booting' : 'is-ready'}`}
        aria-hidden={isBooting ? 'true' : undefined}
        inert={isBooting ? '' : undefined}
      >
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Header />
          <About />
          <Experience />
          <Portfolio />
          <Services />
          <GithubProfile />
          <Articles />
          <Positions />
          <BusinessCard />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
