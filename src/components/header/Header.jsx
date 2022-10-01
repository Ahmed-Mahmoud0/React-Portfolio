import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "./../../assets/Profile-removebg.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Mahmoud</h1>
        <h5 className="text-light">Data Scientist</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Profile" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
