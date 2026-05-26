import React from 'react'
import './businessCard.css'
import cardImage from '../../assets/business_card.png'
import OSWindowBar from '../ui/OSWindowBar'
import { usePreferences } from '../../context/PreferencesContext'

const BusinessCard = () => {
    const { copy } = usePreferences()
    const text = copy.identity

    return (
        <section id='business-card' data-reveal="fade-up">
            <div className="container business-card__shell os-surface module-panel module-panel--identity">
                <OSWindowBar module="SYS-08 / ID" path="/home/shivankar/identity.card" status={text.status} />
                <div className="section-heading">
                    <span className="section-kicker">{text.kicker}</span>
                    <h2>{text.title}</h2>
                </div>
                <div className="business-card__container" data-reveal="zoom-in">
                    <aside className="business-card__terminal" aria-hidden="true">
                        <div className="business-card__prompt">
                            <span>shivankar@profile:~$</span> open identity.card <i />
                        </div>
                        <div className="business-card__record">
                            <span>ROLE</span>
                            <strong>Software Engineer</strong>
                        </div>
                        <div className="business-card__record">
                            <span>DOMAIN</span>
                            <strong>Enterprise Systems</strong>
                        </div>
                        <div className="business-card__record">
                            <span>REGION</span>
                            <strong>Japan</strong>
                        </div>
                        <div className="business-card__record">
                            <span>STATUS</span>
                            <strong className="business-card__online"><i /> Available</strong>
                        </div>
                        <p className="business-card__checksum">IDENTITY / VERIFIED / READ_ONLY</p>
                    </aside>
                    <figure className="business-card__preview">
                        <figcaption>
                            <code>IDENTITY_PREVIEW.PNG</code>
                            <span>RENDERED</span>
                        </figcaption>
                        <div className="business-card__frame">
                            <img src={cardImage} alt={text.alt} className='business-card__image' loading='lazy' decoding='async' />
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default BusinessCard
