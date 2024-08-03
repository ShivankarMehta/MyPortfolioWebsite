import React from "react";
import "./work.css";
import { BiCheck } from "react-icons/bi";
const Works = () => {
  return (
    <section id="works">
      <h5>Jobs/Internships</h5>
      <h2>My Works</h2>
      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>
              Software Development Engineer (Full Time) Standard Force
              Corporation, Japan{" "}
            </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developed a dashboard using React.js and Node.js, improving data
                visualization and decision-making.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Integrated critical business parameters, boosting operational
                efficiency.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Improved the Laravel-based business management system,
                optimizing overseas operations and enhancing overall business
                processes.
              </p>
            </li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className="service">
          <div className="services_head">
            <h3>Fullstack Web Developer (Intern) LTU Corporation, Japan</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developed a dashboard using React.js and Node.js, improving data
                visualization and decision-making.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Integrated critical business parameters, boosting operational
                efficiency.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Improved the Laravel-based business management system,
                optimizing overseas operations and enhancing overall business
                processes.
              </p>
            </li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className="service">
          <div className="services_head">
            <h3>Frontend Web Developer(Intern) Urban Reach & Fynii Infotech</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developed a website using React.js and Node.js, Users website
                for the business purpose of Urban Reach.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developed the Frontend Part of the Fynii Infotech an Edtech
                startup for the interaction of users and experts.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Deployed both the websites by integrating the work of all the
                members working on the projects.
              </p>
            </li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  );
};

export default Works;
