import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 40 },
    { name: 'BootStrap', level: 80 },
    { name: 'Asp.Net', level: 70 },
    { name: '.Net MVC', level: 85 },
    { name: '.Net Core', level: 95 },
    { name: 'Git', level: 95 },
    { name: 'MS-Azure DevOps', level: 80 },
    { name: 'Ajax', level: 80 },
    { name: 'WebApi', level: 85 },
    { name: 'SEO', level: 70 },
    { name: 'React-Native', level: 70 },
    { name: 'React-js', level: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;