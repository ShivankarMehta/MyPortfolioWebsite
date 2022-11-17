import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const Headersocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com" target="blank"><FaGithub/></a>
      <a href="https://dribbble.com" target="blank"><FiDribbble/></a>  
    </div>
  )
}

export default Headersocials