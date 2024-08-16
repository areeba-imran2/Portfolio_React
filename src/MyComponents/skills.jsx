import React from "react";

const skillsData = [
  {
    title: "Front-End",
    description:
      "Passionate about creating intuitive and visually appealing user interfaces that enhance user interaction and satisfaction.",
  },
  {
    title: "Back-End",
    description:
      "Exploring and honing skills in building robust server-side applications and APIs, focusing on performance, security, and scalability.",
  },
  {
    title: "Machine Learning",
    description:
      "Expert in designing and implementing machine learning models to uncover patterns, make predictions, and drive intelligent decision-making.",
  },
  {
    title: "Web Development",
    description:
      "Focused on crafting dynamic and responsive websites with modern technologies to deliver exceptional user experiences and functionality.",
  },
];

const SkillCard = ({ title, description }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h5 className="skills-heading">My Skills</h5>
        <h2 className="skills-heading">My Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
