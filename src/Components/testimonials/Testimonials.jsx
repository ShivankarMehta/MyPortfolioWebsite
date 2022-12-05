import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/myimg2.png'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    id:1,
    avatar:Avt1,
    name:'Shivankar Mehta',
    review:'लिखना आदत है उसकी या किसी की चाहत मे लिखता है वो, मुझे तो ऐसा लगता है, मजबूरी मे लिखने की आदत ने उसे शायर बनाया है।'
  },
  {
    id:2,
    avatar:Avt1,
    name:'Shivankar Mehta',
    review:'तिफ़्ल की मासूमियत को मासूम ही रहने दो,उम्र कम हो अगर तो कमसिन ही रहने दो । जल्दी सयाना करके भीड़-चाल का हिस्सा क्यों बनाना। और जब सबकुछ सही हो तो जानबूझकर ज़िंदगी को हादसा क्यों बनाना । हर मासूम चेहरों को सियासत से दूर रखो,और जिसकी हँसी मे कशिश हो, हर परिवार में एक ऐसा हिस्सा जरूर रखो ।' 
  },
  {
    id:3,
    avatar:Avt1,
    name:'Shivankar Mehta',
    review:'बैठे-बैठे बस यूँही सुबह को साँझ होते देखा है,इस जीवन के उतार चढा़व मे खुद को टुटते और तार-तार होते देखा है। इस चाल को शह-मात कहना गलत होगा क्या ? क्योंकि बादशाह को मरते और उसके नफ़्स की आग को राख होते देखा है ।'
  },
  { id:4,
    avatar:Avt1,
    name:'Shivankar Mehta',
    review:'जब दिखने लगें बुराइयां, उसके अंदर औसाफ़ देखना । मुआफी़ न दे सको उसे, तो खुदही के अंदर झाँक देखना ।।'
  },
  { id:5,
    avatar:Avt1,
    name:'Shivankar Mehta',
    review:'मेरे अंदर इनंसानियत से भरा पैगाम देखेगी,ये दुनिया कभी मुझे मसहूर तो कभी गुमनाम देखेगी।'}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Content Writing</h5>
      <h2>Hindi Creative Writing</h2>

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