import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Online Booking App For Appointment',
      description: 'A fully responsive platform with .Net Core Latest Version',
      technologies: ['.Net Core 8','Sql Server','MS-Azure']
    },
    {
      id: 2,
      title:'Live Photo Uploading And Fetching' ,
      description: 'Clients Uploading images directly on server and can see imediately',
      technologies: ['React', 'API Integration .Net Core','Sql Server', 'MS-Azure']
    },
    {
      id: 3,
      title: 'Organization Static Web and Android App',
      description: 'Complete information about the Organization',
      technologies: ['React','React-Native', 'BootStrap','MS-Azure','Android Studio']
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-inner">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-indicator"></div>
                </div>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1) + 0.5}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;