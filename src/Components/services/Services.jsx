import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have Done</h5>
      <h2>My Projects</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="services_head">
            <h3>An Automated Online Classroom Platform</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Developed during Hackfest 2022, IIT Dhanbad</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Secured 5th position in the Hackfest</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Worked on the Problem statement given by “Atlassian”</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>A video calling web portal</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>An attention detection model, automated attendance</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>A Transcription Model, and A Result Generator.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p> Tech stack: Javascript, Python, HTML, CSS, ReactJs,NodeJS, Machine Learning</p></li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className='service'>
          <div className="services_head">
            <h3>Web Portal of an Agro-Tech Company “Urban
Reach”.</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>My Intern In Summer 2022</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Made the main web portal of this company
</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>In this
its workings, and all other details are present.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>My Role: I made the frontend part of this project
using ReactJs.
</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Tech Stack - HTML, CSS, Javascript, ReactJS,
Bootstrap, React Routers.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>We have depolyed it on the Netlify App</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>This is a Full working Website of this Company</p></li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className='service'>
          <div className="services_head">
            <h3>Web Portal for Ph.D. Scholars of IIT(ISM) Dhanbad</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Developed during a competition named "Web-it-up"</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Fully Developed Frontend Project(Dec 2021)</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>The Web Portal for Ph.D. Scholars</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Secured 2nd Position in this Competition</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>In this we
developed the interface of different posts</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>My Role: FrontEnd Development of all the interfaces.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Tech stack: Javascript, HTML, CSS, MySQL, PHP,
Bootstrap, React js</p></li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  )
}

export default Services