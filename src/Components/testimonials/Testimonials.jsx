import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/myimg2.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: Avt1,
    name: "Fynii Infotech",
    review:
      "My internship with the ed tech company was a fulfilling experience where I played a pivotal role in developing and maintaining a website that served as an invaluable resource for college and university students in mathematics and physics. This experience not only improved my technical skills but also highlighted the importance of user-centered design in the realm of educational technology.",
  },
  {
    id: 2,
    avatar: Avt1,
    name: "Urban Reach technology private Limite",
    review:
      "My internship at the agricultural tech startup was a rewarding experience. I successfully created a user-friendly frontend application for sales, aligning it with the industry's specific needs. This opportunity allowed me to refine my technical skills, collaborate with stakeholders, and contribute to the digital transformation of the agricultural sector. ",
  },
  {
    id: 3,
    avatar: Avt1,
    name: "Life Team United, Japan",
    review:
      "During my full-stack internship, I achieved significant milestones, including conducting comprehensive data analysis and developing a user-friendly dashboard using React and Node.js. I carefully selected a technology stack, integrated interactive charts, and bolstered graphing capabilities through collaboration, all while ensuring secure server connections and contributing to the enhancement of an existing Laravel project.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My Internships</h5>
      <h2>Different Companies</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client_avatar">
                <img src={avatar} alt="avatar 1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
