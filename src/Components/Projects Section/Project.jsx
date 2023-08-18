import React from "react";
import "./projects.css";
import { FiGithub } from "react-icons/fi";

import img1 from "../../assets/youtube.png";
import img2 from "../../assets/fitness.png";
import img3 from "../../assets/firebase.png";
import img4 from "../../assets/extenstion.png";
import img5 from "../../assets/dashboard.png";

const data = [
  {
    id: 1,
    image: img1,
    liveLink: "https://youtube-project-1.netlify.app/",
    github: "https://github.com/Aadesh0/Youtube_clone",
    title: "YouTube Clone",
    desc: "Developed a web-based YouTube clone in which user can search and watch videos as same on YouTube",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },
  {
    id: 2,
    image: img2,
    liveLink: "https://fitness-club-01.netlify.app/",
    github: "https://github.com/Aadesh0/fitness-club",
    title: "Fitness Club",
    desc: "Developed a Fitness club website in which user can watch and learn the exercise according to his/her need. It also shows exercise detail and related YouTube videos",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },

  {
    id: 3,
    image: img3,
    liveLink: "https://firebase-login-1.netlify.app",
    github: "https://github.com/Aadesh0/Firebase-Login",
    title: "FireBase Login",
    desc: "Its a Firebase Authentication Login and Signup Page using email verification",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },
  {
    id: 4,
    image: img4,
    liveLink: "",
    github: "https://github.com/Aadesh0/Leads-tracker",
    title: "YouTube Clone",
    desc: "Its a Web Based extenstion where user can save the URl of Current tab and manually type the URL in it.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 5,
    image: img5,
    liveLink: "https://reactfront-dashboard.netlify.app/",
    github: "https://github.com/Aadesh0/dashboard",
    title: "Dashboard",
    desc: "Its a Frontend Dashboard ",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            title,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="gitHubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
