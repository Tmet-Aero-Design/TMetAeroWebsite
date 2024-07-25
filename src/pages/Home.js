// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../features/portfolio/portfolioSlice';
import ProjectList from '../components/ProjectList';
import '../App.css';  // Assuming you have a global CSS file to put your styles

const sampleProjects = [ // Id is only for backend management. To add a new plane add it at the top of the list with a unique id
  {
    id: 1,
    title: 'The Apotheosis (2023-2024)',
    description: "The Apotheosis (2023-24) was the final iteration of our primary aircraft, building upon its predecessor, The Sovereign (2022-23), with significant improvements in stability and overall aerodynamic efficiency.",
    image: 'previous_designs/2023-2024.png',
    link: "/Apotheosis"
  },
  {
    id: 2,
    title: 'The Sovereign (2022-2023)',
    description: "The Sovereign (2022-23) was the next generation of our primary aircraft, derived heavily from its predecessor, Leviathan (2021-22).",
    image: 'previous_designs/2022-2023.png',
    link: "/Sovereign"
  },
  {
    id: 3,
    title: 'Leviathan (2021-2022)',
    description: "The Leviathan was the first aircraft from its design cycle, setting a precedent for a design philosophy that focuses on simplicity and reliability. ",
    image: 'previous_designs/2021-2022.jpg',
    link: "/Leviathan"
  },
];

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(sampleProjects));
  }, [dispatch]);

  return (
    <div>
      <div className="relative video-section h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop>
          <source src="content/banner-video-upscaled2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <div className="content">
        <ProjectList />
      </div>
    </div>
  );
};

export default Home;
