// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setProjects } from './features/portfolio/portfolioSlice';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import SponsorshipPackage from './pages/SponsorshipPackage';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setProjects(sampleProjects));
  // }, [dispatch]);

  return (
    <Router basename="/TMetAeroWebsite">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/SponsorshipPackage" element={<SponsorshipPackage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
