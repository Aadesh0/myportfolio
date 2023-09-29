import React from "react";
import "./home.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { TbArrowBigRightLines, TbChevronsDown } from "react-icons/tb";

const Home = () => {
  return (
    <section id="home" className="home section">
      {/* this div will be only visible at wider screen */}

      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/Aadesh0">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/aadeshkumar01/">
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https://leetcode.com/aadesh1912/">
            <SiLeetcode className="icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* homeCOntent */}
      <div className="container homeContainer">
        <span className="introText">Hi my name is,</span>
        <h1 className="title">Aadesh Kumar</h1>
        <span className="subTitle">
          I develop scalable web based application and software.
        </span>
        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact
          need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down </h6>
              <TbChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* right div, with email address( Will also be visible at a wider screen only) */}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:aadeshksanj01@gmail.com">
              aadeshksanj01@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
