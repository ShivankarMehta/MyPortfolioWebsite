import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Shivankar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Techstacks</a>
        </li>
        <li>
          <a href="#services">Projects</a>
        </li>
        <li>
          <a href="#positions">Positions</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">My Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/shivankar-mehta-058b29207/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/ShivankarMehta" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shivankarmehta/" target="blank">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shivankar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
