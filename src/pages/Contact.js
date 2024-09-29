import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <h1>Mócza Szilvia</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span className="contact-text">+36 70 610 6420</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faHome} className="contact-icon" />
            <span className="contact-text">Budapest</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span className="contact-text">moczaszilvia@gmail.com</span>
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/Szisz06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/m%C3%B3cza-szilvia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
