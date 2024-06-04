// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../features/portfolio/portfolioSlice';
import ProjectList from '../components/ProjectList';

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
            <h1>Home Page</h1>
            <ProjectList />
        </div>
    );
};

export default Home;
