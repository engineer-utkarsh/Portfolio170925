import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML', level: 90, color: '#E44D26' },
    { name: 'CSS', level: 85, color: '#264DE4' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 40, color: '#339933' },
    { name: 'BootStrap', level: 80, color: '#7952B3' },
    { name: 'Asp.Net', level: 70, color: '#512BD4' },
    { name: '.Net MVC', level: 85, color: '#5C2D91' },
    { name: '.Net Core', level: 95, color: '#512BD4' },
    { name: 'Git', level: 95, color: '#F05032' },
    { name: 'MS-Azure DevOps', level: 80, color: '#0078D4' },
    { name: 'Ajax', level: 80, color: '#2C3E50' },
    { name: 'WebApi', level: 85, color: '#5C2D91' },
    { name: 'SEO', level: 70, color: '#0F9D58' },
    { name: 'React-Native', level: 70, color: '#61DAFB' },
    { name: 'React-js', level: 70, color: '#61DAFB' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-underline"></div>
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <div className="skill-name-wrapper">
                <span className="skill-name">{skill.name}</span>
                <div 
                  className="skill-icon" 
                  style={{ backgroundColor: skill.color }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            
            <div className="skill-bar">
              <div 
                className={`skill-progress ${isVisible ? 'animate' : ''}`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  backgroundColor: skill.color
                }}
                data-level={skill.level}
              >
                <div className="skill-progress-glow"></div>
              </div>
            </div>
            
            <div className="skill-dots">
              {[...Array(10)].map((_, dotIndex) => (
                <div 
                  key={dotIndex} 
                  className={`skill-dot ${dotIndex * 10 < skill.level ? 'active' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;