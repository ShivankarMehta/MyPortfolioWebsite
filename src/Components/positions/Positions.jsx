import React from 'react'
import './positions.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='positions'>
      <h5>LEADERSHIP POSITIONS / CLUBS</h5>
      <h2>PORs</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="services_head">
            <h3>Founder of a YouTube channel “Integrative Learning”. </h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Experience in leading a big team of 20
members working on that channel.
</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Role: Headed its
management and teaching department.</p></li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className='service'>
          <div className="services_head">
            <h3>Member of Student coordination Placement team
of IIT Dhanbad
</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>I am in Communication division of SCPT 2023</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Role: communication with the HRs, voluntering the conduction of tests & interviews
</p></li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className='service'>
          <div className="services_head">
            <h3>Member of Different Clubs</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Coordinator of Chayanika Sangh “ a Hindi literary
club of IIT(ISM) Dhanbad”</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Co-Founder of a student-run organization named
“ISM Warriors”</p></li>
<li><BiCheck className='service_list-icon'/>
            <p>Can't Reveal more ..HaHaHa</p></li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  )
}

export default Services