import React, { lazy, useEffect, useState } from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/nav/Navbar'
import About from './Components/about/About'
import CommandPalette from './Components/commandPalette/CommandPalette'
import Footer from './Components/footer/Footer'
import BootLoader from './Components/ui/BootLoader'
import DeferredSection from './Components/ui/DeferredSection'
import './refresh.css'
import './styles/tokens.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/responsive.css'

const Experience = lazy(() => import('./Components/experience/Experience'))
const Portfolio = lazy(() => import('./Components/portfolio/Portfolio'))
const Services = lazy(() => import('./Components/services/Services'))
const CaseStudies = lazy(() => import('./Components/caseStudies/CaseStudies'))
const GithubProfile = lazy(() => import('./Components/github/GithubProfile'))
const Articles = lazy(() => import('./Components/articles/Articles'))
const Positions = lazy(() => import('./Components/positions/Positions'))
const BusinessCard = lazy(() => import('./Components/business/BusinessCard'))
const Contact = lazy(() => import('./Components/contact/Contact'))

const App = () => {
  const [isBooting, setIsBooting] = useState(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false
      }

      try {
        return sessionStorage.getItem('portfolio-boot-seen') !== 'true'
      } catch {
        return true
      }
    }
  )

  useEffect(() => {
    if (!isBooting) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      setIsBooting(false)
      try {
        sessionStorage.setItem('portfolio-boot-seen', 'true')
      } catch {
        // Storage can be unavailable in privacy-restricted browsing contexts.
      }
    }, 900)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timer)
    }
  }, [isBooting])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const shouldReduce = mediaQuery.matches
    if (shouldReduce) {
      document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'))
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

    const observeRevealNodes = (root = document) => {
      if (root instanceof Element && root.matches('[data-reveal]')) {
        observer.observe(root)
      }
      root.querySelectorAll?.('[data-reveal]').forEach((node) => observer.observe(node))
    }

    observeRevealNodes()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealNodes(node)
          }
        })
      })
    })

    mutationObserver.observe(document.getElementById('main-content'), { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
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
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      document.querySelectorAll('.module-panel').forEach((panel) => panel.classList.add('is-active', 'is-entered'))
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

    const observePanels = (root = document) => {
      if (root instanceof Element && root.matches('.module-panel')) {
        observer.observe(root)
      }
      root.querySelectorAll?.('.module-panel').forEach((panel) => observer.observe(panel))
    }

    observePanels()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observePanels(node)
          }
        })
      })
    })

    mutationObserver.observe(document.getElementById('main-content'), { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
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
          <CommandPalette />
          <DeferredSection id="services"><Services /></DeferredSection>
          <DeferredSection id="case-studies"><CaseStudies /></DeferredSection>
          <About />
          <DeferredSection id="portfolio"><Portfolio /></DeferredSection>
          <DeferredSection id="experience"><Experience /></DeferredSection>
          <DeferredSection id="writing"><Articles /></DeferredSection>
          <DeferredSection id="github"><GithubProfile /></DeferredSection>
          <DeferredSection id="positions"><Positions /></DeferredSection>
          <DeferredSection id="business-card"><BusinessCard /></DeferredSection>
          <DeferredSection id="contact"><Contact /></DeferredSection>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
