// src/components/Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg overflow-hidden flex justify-center items-center bg-white">
        <img alt={project.title} className="object-contain h-full w-full" src={project.image} />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{project.title}</h2>
      <p className="text-base leading-relaxed mt-2">{project.description}</p>
      <a className="text-blue-500 inline-flex items-center mt-3" href={project.link}>
        Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};


export default Project;
