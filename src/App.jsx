import React from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/nav/Navbar'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
import Positions from './Components/positions/Positions'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
const App = () => {
  return (
   <>
   <Header/>
   <Navbar/>
   <About/>
   <Experience/>
   <Services/>
   <Positions/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App