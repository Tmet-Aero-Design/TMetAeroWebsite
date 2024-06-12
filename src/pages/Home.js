// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../features/portfolio/portfolioSlice';
import ProjectList from '../components/ProjectList';
import '../App.css';  // Assuming you have a global CSS file to put your styles

const sampleProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description for project one.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description for project two.',
        image: 'https://via.placeholder.com/150',
    },
];

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjects(sampleProjects));
    }, [dispatch]);

    return (
        <div>
            <div className="video-section">
                <video className="background-video" muted autoPlay loop>
                    <source src="content/banner-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className="overlay-content">
                    <h1>Welcome to TMet Aero Design</h1>
                </div> */}
            </div>
            <div className="content">
                <ProjectList />
            </div>
        </div>
    );
};

export default Home;
