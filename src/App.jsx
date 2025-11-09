import React, { useEffect } from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/nav/Navbar'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/services/Services'
import Positions from './Components/positions/Positions'
import Contact from './Components/contact/Contact'
import BusinessCard from './Components/business/BusinessCard'
import Footer from './Components/footer/Footer'

const App = () => {
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
      return
    }

    const tiltNodes = Array.from(document.querySelectorAll('[data-tilt]'))

    const handlePointerMove = (event) => {
      const element = event.currentTarget
      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      const tiltX = (0.5 - y) * 12
      const tiltY = (x - 0.5) * 12

      element.style.setProperty('--tiltX', `${tiltX.toFixed(3)}deg`)
      element.style.setProperty('--tiltY', `${tiltY.toFixed(3)}deg`)
    }

    const resetTilt = (event) => {
      const element = event.currentTarget
      element.style.setProperty('--tiltX', '0deg')
      element.style.setProperty('--tiltY', '0deg')
    }

    tiltNodes.forEach((node) => {
      node.style.setProperty('--tiltX', '0deg')
      node.style.setProperty('--tiltY', '0deg')
      node.addEventListener('pointermove', handlePointerMove)
      node.addEventListener('pointerleave', resetTilt)
      node.addEventListener('pointerup', resetTilt)
    })

    return () => {
      tiltNodes.forEach((node) => {
        node.removeEventListener('pointermove', handlePointerMove)
        node.removeEventListener('pointerleave', resetTilt)
        node.removeEventListener('pointerup', resetTilt)
      })
    }
  }, [])

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Positions />
      <BusinessCard />
      <Contact />
      <Footer />
    </>
  )
}

export default App