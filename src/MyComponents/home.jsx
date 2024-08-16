// Home.jsx
import React from "react";
// import './App.css';

export function Home() {
  return (
    <section id="home">
      <nav className="navbar">
        <div className="navbar-left"></div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="contact-button">Contact Me</button>
        </div>
      </nav>
    </section>
  );
}

export default Home;
