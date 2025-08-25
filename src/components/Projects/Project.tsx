import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ProjectType {
  id: string | number;
  title: string;
  description: string;
  image: string;
  year: string | number;
  link: string;
}

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      {/* Image Section with Year Badge */}
      <div className="relative">
        <Image
          alt={project.title}
          src={project.image}
          className="w-full h-56 object-cover"
          width={400}
          height={224}
        />
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {project.description}
        </p>

        {/* CTA */}
        <Link
          href={`PastProjects/${project.link}`}
          className="inline-flex items-center mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Project;
