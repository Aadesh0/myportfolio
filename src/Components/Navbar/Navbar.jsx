import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export const Navbar = () => {
  // Code to toggle on and off the navbar at small width

  const [active, setActive] = useState("navBar");

  //this will bring in the navbar from the top
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  //this will hide in the navbar from the top
  const removeNavBar = () => {
    setActive("navBar");
  };

  // Code Statement to add a background color to the header.
  const [activeHeader, setActiveHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">AK.</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span>
              About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber">2.</span>
              Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3.</span>
              Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4.</span>
              Contact
            </a>
          </li>
          <button className="btn">
            <a href="Kumar_Aadesh.pdf" download="Kumar_Aadesh.pdf">
              Resume
            </a>
          </button>
        </ul>

        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>
      <div onClick={showNavBar} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
