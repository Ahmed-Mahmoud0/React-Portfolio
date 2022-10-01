import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ahmed-mahmoud-89b206181/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Ahmed-Mahmoud0"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.kaggle.com/ahmedxmahmoud"
        target="_blank"
        rel="noreferrer"
      >
        <FaKaggle />
      </a>
    </div>
  );
};

export default HeaderSocials;
