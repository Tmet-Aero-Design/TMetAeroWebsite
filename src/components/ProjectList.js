// src/components/ProjectList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const ProjectList = () => {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
