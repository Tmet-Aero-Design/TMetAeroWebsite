import React from "react";
import Project, { ProjectType } from "./Project";

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <section className="custom-section bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-5 py-16">
        {/* Section Header */}
        <div className="flex flex-col text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Previous Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An archive of our aircraft designs, showcasing the evolution of our
            work leading to our most advanced creations.
          </p>
          <div className="mt-6 h-1 w-24 bg-indigo-500 dark:bg-indigo-400 mx-auto rounded"></div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
