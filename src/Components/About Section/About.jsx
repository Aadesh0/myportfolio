import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";

import img from "../../assets/Aadesh.png";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a success-driven, determined web developer. I have knowledge of
            using HTML, CSS, JavaScript and React to build accessible
            component-based web pages and system. <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team compositions.
            <br />A passionate person willing to learn more technologies to
            become a better developer than i was yesterday. So determined and
            result oriented.
          </h4>
          <div className="aboutBtn">
            <a
              href="AADESH@RESUME.pdf"
              download="AADESH@RESUME.pdf"
              className="flex"
            >
              Download Resume <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Aadesh Kumar" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
