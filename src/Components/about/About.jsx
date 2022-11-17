import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'
const About = () => {
  return (
  <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>
   <div className="container about_container">
    <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About me" />
        </div>
    </div>
    <div className="about_content">
       <div className="about_cards">
        <article className='about_card'>
         <FiUsers
         className='about_icon'/>
         <h5>Client</h5>
           <small>200+ Worldwide</small>
        </article>
        <article className='about_card'>
         <FaAward className='about_icon'/>
         <h5>Experience</h5>
           <small>3+ Years Working</small>
        </article>
        <article className='about_card'>
         <VscFolderLibrary
         className='about_icon'/>
         <h5>Project</h5>
           <small>80+ Completed</small>
        </article>
       </div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati qui nemo, a quos repellat eveniet, iste, sequi illo velit magnam? Eveniet repellat magnam molestias vero accusantium nulla mollitia suscipit.
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
   </div>
  </section>
  )
}

export default About