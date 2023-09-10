import React from "react";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8gg5bup",
      "template_7lzth1q",
      form.current,
      "TxwQ6VKKkoMMZRmoC"
    );
    e.target.reset(); //the from will reset after submit
  };

  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <AiFillLinkedin className="icon" />
              </div>
              <h4>Linkedin</h4>
              <span className="userName">@aadeshkumar01</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/aadeshkumar01/"
                  className="flex"
                >
                  Send Message
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="userName">@aadesh_0715</span>

              <div>
                <a
                  href="https://www.instagram.com/aadesh_0715/"
                  className="flex"
                >
                  Send Message
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <FaFacebookSquare className="icon" />
              </div>
              <h4>Facebook</h4>
              <span className="userName">@aadesh15</span>

              <div>
                <a href="https://www.facebook.com/aadesh15/" className="flex">
                  Send Message
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an Email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <input type="email" placeholder="Enter Your Email" name="email" />
            <textarea
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="formBtn" type="submit" name="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
