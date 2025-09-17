import React from 'react';
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

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;