import React from 'react'
import './contact.css'
import {MdOutlineEmail}  from 'react-icons/md' 
import {BsInstagram} from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05nvexb', 'template_oq8znxm', form.current, 'xtq4XEUsIKkIsSohu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>shivankarmehta60@gmail.com</h5>
            <a href="mailto:shivankarmehta60@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsInstagram className='contact_option-icon'/>
           <h4>Instgram</h4>
           <h5>Shivankar Mehta</h5>
            <a href="https://www.instagram.com/shivankarmehta/" target='__blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
           <h4>WhatsApp</h4>
           <h5>8271681154</h5>
            <a href="https://api.whatsapp.com/send?phone+8271681154" target='__blank'>Send a message</a>
          </article>
        </div>
        {/**End of Contact option**/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </section>
  )
  }

export default Contact