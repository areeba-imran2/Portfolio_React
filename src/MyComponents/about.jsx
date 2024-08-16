// About.jsx
import React from "react";
import portfolioImage from "./portfolio.JPG";

export function About() {
  return (
    <section id ="about"className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2>Hey, I'm Areeba Imran</h2>
          <h1>
            Web <span className="highlight">Developer</span>
          </h1>
          <p>
            I’m a software engineering student with a strong interest in web
            development and machine learning. I enjoy exploring how these fields
            intersect to create innovative solutions and applications.
          </p>
          <button className="contact-button">Learn More</button>
        </div>
        <div className="image-content">
          <img src={portfolioImage} alt="Portfolio" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
