import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Shivankar</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiemce">Experience</a></li>
        <li><a href="services#">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shivankar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer