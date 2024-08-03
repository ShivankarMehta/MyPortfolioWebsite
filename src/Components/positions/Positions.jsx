import React from "react";
import "./positions.css";
import { BiCheck } from "react-icons/bi";
const Positions = () => {
  return (
    <section id="positions">
      <h5>LEADERSHIP POSITIONS / CLUBS</h5>
      <h2>My PORs</h2>
      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>
              Event Head of SRIJAN'23 (Cultural Fest of IIT(ISM) Dhanbad){" "}
            </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I was the event head of the largest cultural fest of eastern
                India & of IIT(ISM) named SRIJAN
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Role: Headed all the events & lead a big tam of 30 members.</p>
            </li>
          </ul>
        </article>
        {/**End of UI/UX card**/}
        <article className="service">
          <div className="services_head">
            <h3>
              Member of Student coordination Placement team of IIT Dhanbad
            </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>I am in Communication division of SCPT 2023</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Role: communication with the HRs, voluntering the conduction of
                tests & interviews
              </p>
            </li>
          </ul>
        </article>
        {/**End of 2nd card**/}
        <article className="service">
          <div className="services_head">
            <h3>Member of Different Clubs</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Coordinator of Chayanika Sangh “ a Hindi literary club of
                IIT(ISM) Dhanbad”
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Co-Founder of a student-run organization named “ISM Warriors”
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Can't Reveal more ..HaHaHa</p>
            </li>
          </ul>
        </article>
        {/**End of 3rd card**/}
      </div>
    </section>
  );
};

export default Positions;
