import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Headersocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/shivankar-mehta-058b29207/" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/ShivankarMehta" target="blank"><FaGithub/></a>
      <a href="https://www.instagram.com/shivankarmehta/" target="blank"><FiInstagram/></a>  
    </div>
  )
}

export default Headersocials