// src/components/Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default Project;
