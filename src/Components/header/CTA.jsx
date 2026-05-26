import React from 'react'
import CV from '../../assets/shivankar_resume_.pdf'
import { Download, MessageCircle } from 'lucide-react'
import '../../index.css'
import { usePreferences } from '../../context/PreferencesContext'

const CTA = () => {
  const { copy } = usePreferences()

  return (
    <div className='cta' role="group" aria-label={copy.header.actions}>
      <a href={CV} download className='cta__button cta__button--secondary' data-ripple>
        <span className='cta__button-icon' aria-hidden="true">
          <Download size={22} strokeWidth={1.8} />
        </span>
        <span className='cta__button-content'>
          <span className='cta__button-label'>{copy.header.download}</span>
        </span>
      </a>
      <a href="#contact" className='cta__button cta__button--primary' data-ripple>
        <span className='cta__button-icon' aria-hidden="true">
          <MessageCircle size={22} strokeWidth={1.8} />
        </span>
        <span className='cta__button-content'>
          <span className='cta__button-label'>{copy.header.contact}</span>
        </span>
      </a>
    </div>
  )
}

export default CTA
