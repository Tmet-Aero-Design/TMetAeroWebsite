"use client";
import React from "react";
import ProjectList from "@/components/Projects/ProjectList";
import { ProjectType } from "@/components/Projects/Project";

const sampleProjects: ProjectType[] = [ // id is irrelevant here, if you want to add more add them to the top of the list
  {
    id: 1,
    title: "The Apotheosis",
    year: "2023-2024",
    description:
      "The Apotheosis (2023-24) was the final iteration of our primary aircraft, building upon its predecessor, The Sovereign (2022-23), with significant improvements in stability and overall aerodynamic efficiency.",
    image: "/previous_designs/2023-2024.png",
    link: "/Apotheosis",
  },
  {
    id: 2,
    title: "The Sovereign",
    year: "2022-2023",
    description:
      "The Sovereign (2022-23) was the next generation of our primary aircraft, derived heavily from its predecessor, Leviathan (2021-22).",
    image: "/previous_designs/2022-2023.png",
    link: "/Sovereign",
  },
  {
    id: 3,
    title: "Leviathan",
    year: "2021-2022",
    description:
      "The Leviathan was the first aircraft from its design cycle, setting a precedent for a design philosophy that focuses on simplicity and reliability.",
    image: "/previous_designs/2021-2022.jpg",
    link: "/Leviathan",
  },
];

const Home: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section with Video Background */}
      <div className="relative video-section h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/content/banner-video-upscaled2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom Overlay */}
        <div className="absolute bottom-12 w-full flex flex-col items-center text-white z-10 px-4">
          <p className="text-lg md:text-xl font-medium drop-shadow-md mb-4 text-center">
            Pushing the boundaries of student aerospace engineering
          </p>
          <button
            onClick={scrollToProjects}
            className="inline-flex bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-md transition text-white hover:cursor-pointer"
          >
            Explore Our Projects
          </button>

          {/* Scroll Down Indicator */}
          <div className="mt-8 animate-bounce">
            <svg
              className="w-6 h-6 text-white opacity-75"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Archive */}
      <div id="projects" className="content">
        <ProjectList projects={sampleProjects} />
      </div>
    </div>
  );
};

export default Home;
