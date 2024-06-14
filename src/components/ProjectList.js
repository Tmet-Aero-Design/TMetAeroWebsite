// src/components/ProjectList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const ProjectList = () => {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Previous Projects</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            Below is an archive of our previous designs, showcasing the evolution of our work leading up to our latest and most advanced design.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
