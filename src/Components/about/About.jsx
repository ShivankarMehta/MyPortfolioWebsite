import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/myimg3.png'
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
         <h5>Student</h5>
           <small>IIT(ISM) Dhanbad</small>
        </article>
        <article className='about_card'>
         <FaAward className='about_icon'/>
         <h5>Experience</h5>
           <small>2+ years Coding</small>
        </article>
        <article className='about_card'>
         <VscFolderLibrary
         className='about_icon'/>
         <h5>Projects</h5>
           <small>5+ Completed</small>
        </article>
       </div>
       <p>
       Hello! I am Shivankar Mehta.I am from Ara,Bihar and I am a 3rd Year BTECH Student of Mechanical Engineering at IIT(ISM) Dhanbad.I am exploring the field of programming from past 2 years.I am a web developer and have worked upon more than 5 projects of web development. Apart from this I love writing hindi poetry,Gajals,short stories etc.I love playing and watching cricket. 
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
   </div>
  </section>
  )
}

export default About