import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/urban.png";
import IMG2 from "../../assets/meme_generator.png";
import IMG3 from "../../assets/online.png";
import IMG4 from "../../assets/workout-app.png";
import IMG5 from "../../assets/dashboard.png";
import IMG6 from "../../assets/laravelpillar.jpg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web Portal of an Agro-Tech Company "Urban Reach"',
    github: "https://github.com/ShivankarMehta/UrbanReach_final_projet-",
    demo: "https://urbanreach.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Meme Generator Using API & NodeJS",
    github: "https://github.com/ShivankarMehta/meme-generator",
    demo: "https://github.com/ShivankarMehta/meme-generator",
  },
  {
    id: 3,
    image: IMG3,
    title: "Automated Online Classroom Platform",
    github: "https://github.com/ShivankarMehta/Online-Classroom-Platform",
    demo: "https://github.com/ShivankarMehta/Online-Classroom-Platform",
  },
  {
    id: 4,
    image: IMG4,
    title: "Mern_app on workout entry",
    github: "https://github.com/ShivankarMehta/Workout_mernapp",
    demo: "https://github.com/ShivankarMehta/Workout_mernapp",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dashboard of the company",
    github: "https://github.com/ShivankarMehta",
    demo: "https://ltudashboard-team-a.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Basic Laravel Project",
    github: "https://github.com/ShivankarMehta/laravelbasic",
    demo: "https://github.com/ShivankarMehta/laravelbasic",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt="prese" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="__blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
