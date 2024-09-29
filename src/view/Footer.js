import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleMailClick = () => {
    navigate("/contact");
  };

  return (
    <footer>
      <FontAwesomeIcon
        icon={faInfoCircle}
        onMouseOver={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="icon"
      />
      {showInfo && (
        <div className="info-box">
          <p>
            This application was made with React in the Visual Studio Code
            development environment and is 100% owned by Szilvia Mócza.
          </p>
        </div>
      )}
      <a
        href="https://github.com/Szisz06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/m%C3%B3cza-szilvia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <FontAwesomeIcon
        icon={faEnvelope}
        onClick={handleMailClick}
        className="icon"
      />
    </footer>
  );
};

export default Footer;
