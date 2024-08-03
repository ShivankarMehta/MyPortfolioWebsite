import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/image2.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Student</h5>
              <small>IIT(ISM) Dhanbad</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years Coding</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hello! I am Shivankar Mehta from India, a passionate Software
            Engineer with three years of programming experience. As a web
            developer, I have successfully completed over 10 web development
            projects. Currently, I am working as a Software Engineer at Standard
            Force in Japan. Previously, I held positions as a Full Stack
            Developer intern at Life Team United Japan, Urban Reach, and Fynii
            Infotech.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
