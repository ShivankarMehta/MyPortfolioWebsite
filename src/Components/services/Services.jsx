import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className='service'>
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className='service'>
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
            <li><BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur.</p></li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  )
}

export default Services