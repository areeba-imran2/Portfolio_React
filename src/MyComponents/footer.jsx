import React from "react";

export function Footer() {
  return (
    <footer className="footerSection">
      <div className="footerContent">
        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socialIcons">
          <a href="https://github.com/areeba-imran2/Portfolio_React">
            <i className="fab fa-github"></i>
          </a>
          <a href="http://www.linkedin.com/in/areeba-imran-062b22255" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div className="legalLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
