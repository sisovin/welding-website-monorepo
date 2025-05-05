import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
