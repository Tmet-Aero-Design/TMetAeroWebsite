// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from './features/portfolio/portfolioSlice';
import ProjectList from './components/ProjectList';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(sampleProjects));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Design Team Portfolio Test</h1>
      <ProjectList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
