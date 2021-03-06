import React from 'react';
import Image from 'gatsby-image';

import './Projects.css';

const Projects = ({ projectData }) => {
  return (
    <div name="project" className="project-container">
      <div className="section-title">PROJECTS</div>
      {projectData.map(({ node: project }, index) => {
        return (
          <div key={index} className="project__card">
            <div className="project__card__wrapper">
                <div className="project__title">{project.title}</div>
                <div className="project__description">{project.description}</div>
                <div className="project-button__container">
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button__wrapper">
                    <button className="project-button">Live Demo</button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button__wrapper">
                    <button className="project-button">Github</button>
                  </a>
                </div>
            </div>
            <div className="project-image-wrapper">
              <Image fluid={project.image.asset.fluid} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
