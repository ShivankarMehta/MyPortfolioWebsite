import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    id:1,
    avatar:Avt1,
    name:'Tina Snow',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam corporis ipsa ab asperiores corrupti ullam, voluptate, aliquid non dolorum sunt doloribus sapiente deserunt quae possimus architecto unde, sit delectus?'
  },
  {
    id:2,
    avatar:Avt1,
    name:'Tina Snow',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam corporis ipsa ab asperiores corrupti ullam, voluptate, aliquid non dolorum sunt doloribus sapiente deserunt quae possimus architecto unde, sit delectus?' 
  },
  {
    id:3,
    avatar:Avt1,
    name:'Tina Snow',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam corporis ipsa ab asperiores corrupti ullam, voluptate, aliquid non dolorum sunt doloribus sapiente deserunt quae possimus architecto unde, sit delectus?'
  },
  { id:4,
    avatar:Avt1,
    name:'Tina Snow',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam corporis ipsa ab asperiores corrupti ullam, voluptate, aliquid non dolorum sunt doloribus sapiente deserunt quae possimus architecto unde, sit delectus?'
  },
  { id:5,
    avatar:Avt1,
    name:'Tina Snow',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam corporis ipsa ab asperiores corrupti ullam, voluptate, aliquid non dolorum sunt doloribus sapiente deserunt quae possimus architecto unde, sit delectus?'}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >{
     data.map(({id,avatar,name,review})=>{
      return(
        <SwiperSlide className='testimonial' key={id}>
          <div className="client_avatar">
          <img src={avatar} alt="avatar 1" />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
           {review}
          </small>
        </SwiperSlide>
      )
     })}
      </Swiper>
    </section>
  )
}

export default Testimonials