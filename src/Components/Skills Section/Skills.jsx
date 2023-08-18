import React from "react";
import "./skill.css";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TiCss3 } from "react-icons/ti";
import { SiHtml5 } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skill" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* Skills Container */}
      <div className="skillsContainer grid">
        {/* single Group of Skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">Fresher Graduate</span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaNodeJs className="icon" />
              </div>
              <span className="skillName">NodeJs</span>
            </div>
          </div>
        </div>

        {/* single Group of Skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">Fresher Graduate</span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCplusplus className="icon" />
              </div>
              <span className="skillName">C++</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className="icon" />
              </div>
              <span className="skillName">MySQL</span>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
