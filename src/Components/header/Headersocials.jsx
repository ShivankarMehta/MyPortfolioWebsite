import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaMedium} from 'react-icons/fa'
const Headersocials = () => {
  return (
    <nav className='header_socials' aria-label="Social profiles">
      <a href="https://www.linkedin.com/in/shivankar-mehta-058b29207/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
      <a href="https://github.com/ShivankarMehta" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
      <a href="https://medium.com/@shivankarmehta60" target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium/></a>
      <a href="https://www.instagram.com/shivankarmehta/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram/></a>
    </nav>
  )
}

export default Headersocials
