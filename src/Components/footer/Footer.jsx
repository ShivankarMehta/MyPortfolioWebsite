import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer data-reveal="fade-up">
      <div className="container footer__container">
        <div className="footer__social-row" data-reveal="fade-up">
          <span className="footer__tag">Connect</span>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/shivankar-mehta-058b29207/" target="blank" aria-label="LinkedIn">
              <BsLinkedin />
            </a>
            <a href="https://github.com/ShivankarMehta" target="blank" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/shivankarmehta/" target="blank" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <small>© {new Date().getFullYear()} Shivankar Mehta. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer