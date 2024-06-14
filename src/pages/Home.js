// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../features/portfolio/portfolioSlice';
import ProjectList from '../components/ProjectList';
import '../App.css';  // Assuming you have a global CSS file to put your styles

const sampleProjects = [ // Id is only for backend management. To add a new plane add it at the top of the list with a unique id
  {
    id: 1,
    title: 'Apotheosis (2023-2024)',
    description: 'Description for Apotheosis.',
    image: 'https://dummyimage.com/1203x503',
    link: "/"
  },
  {
    id: 2,
    title: 'Sovereign (2022-2023)',
    description: 'Description for Sovereign.',
    image: 'https://dummyimage.com/1203x503',
    link: "/"
  },
  {
    id: 3,
    title: '(2021-2022)',
    description: 'Description for project Three.',
    image: 'https://dummyimage.com/1203x503',
    link: "/"
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
          <source src="content/banner-video.mp4" type="video/mp4" />
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
