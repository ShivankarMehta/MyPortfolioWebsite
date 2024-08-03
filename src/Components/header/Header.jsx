import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/myimage.png";
import Headersocials from "./Headersocials";
const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shivankar Mehta</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <Headersocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
