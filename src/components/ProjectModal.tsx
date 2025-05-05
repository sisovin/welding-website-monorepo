import React from 'react';
import Image from 'next/image';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-details">{project.details}</div>
        <div className="modal-images">
          {project.images.map((image, index) => (
            <Image 
              key={index} 
              src={image} 
              alt={`Project image ${index + 1}`} 
              priority 
              layout="responsive" 
            />
          ))}
        </div>
        <div className="modal-categories">
          {project.categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
