import React, { useRef, useState } from 'react'
import './contact.css'
import { ArrowRight, BookOpen, Github, Linkedin, Mail } from 'lucide-react'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const contacts = [
  {
    value: 'shivankarmehta60@gmail.com',
    href: 'mailto:shivankarmehta60@gmail.com',
    icon: <Mail size={20} />
  },
  {
    value: 'Shivankar Mehta',
    href: 'https://www.linkedin.com/in/shivankar-mehta-058b29207/',
    icon: <Linkedin size={20} />
  },
  {
    value: '@ShivankarMehta',
    href: 'https://github.com/ShivankarMehta',
    icon: <Github size={20} />
  },
  {
    value: '@shivankarmehta60',
    href: 'https://medium.com/@shivankarmehta60',
    icon: <BookOpen size={20} />
  }
]

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const { copy } = usePreferences()
  const text = copy.contact

  const sendEmail = async (event) => {
    event.preventDefault()
    setSending(true)
    setStatus('')

    try {
      const { default: emailjs } = await import('emailjs-com')
      await emailjs.sendForm('service_05nvexb', 'template_oq8znxm', form.current, 'xtq4XEUsIKkIsSohu')
      form.current.reset()
      setStatus(text.sent)
    } catch (error) {
      setStatus(text.failure)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="container os-surface module-panel module-panel--contact">
        <OSWindowBar module="SYS-09 / UPLINK" path="/net/contact/socket" status={text.status} />
        <div className="section-heading" data-reveal="fade-up">
          <span className="section-kicker">{text.kicker}</span>
          <h2>{text.title}</h2>
        </div>
        <aside className="contact_brief" data-reveal="fade-up" aria-label={text.projectAria}>
          <div className="contact_brief-copy">
            <small>{text.projectStatus}</small>
            <h3>{text.projectTitle}</h3>
            <p>{text.projectDescription}</p>
          </div>
          <div className="contact_brief-services" aria-label={text.projectServicesAria}>
            {text.projectServices.map((service) => <span key={service}>{service}</span>)}
          </div>
          <a className="contact_brief-link" href="#project-inquiry">
            {text.projectAction} <ArrowRight size={17} aria-hidden="true" />
          </a>
        </aside>
        <div className="contact_container">
          <div className="contact_options" data-reveal="fade-up">
            {contacts.map(({ value, href, icon }, index) => (
              <a className="contact_option" href={href} target={index === 0 ? undefined : '_blank'} rel="noreferrer" key={href}>
                <span className="contact_option-icon">{icon}</span>
                <span>
                  <strong>{text.items[index]}</strong>
                  <small>{value}</small>
                </span>
              </a>
            ))}
          </div>
          <form id="project-inquiry" ref={form} onSubmit={sendEmail} data-reveal="fade-up">
            <label>
              {text.name}
              <input type="text" name="name" autoComplete="name" placeholder={text.namePlaceholder} required />
            </label>
            <label>
              {text.email}
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label>
              {text.message}
              <textarea name="message" rows="5" placeholder={text.messagePlaceholder} required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? text.sending : text.send}
            </button>
            {status && <p className="contact_status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
