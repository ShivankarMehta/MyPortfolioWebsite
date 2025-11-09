import React from 'react'
import './businessCard.css'
import cardImage from '../../assets/business_card.png'

const BusinessCard = () => {
    return (
        <section id='business-card' data-reveal="fade-up">
            <h2>Business Card</h2>
            <div className="container business-card__container" data-reveal="zoom-in">
                <img src={cardImage} alt='Business card for Shivankar Mehta' className='business-card__image' />
            </div>
        </section>
    )
}

export default BusinessCard
