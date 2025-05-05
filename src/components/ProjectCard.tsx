import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <Image 
        src={project.images[0]} 
        alt={project.title} 
        className="project-image" 
        priority 
        layout="responsive" 
      />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.categories.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
