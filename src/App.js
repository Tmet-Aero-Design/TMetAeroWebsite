// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import SponsorshipPackage from './pages/SponsorshipPackage';
import ContactUs from './pages/ContactUs';

import BlogApotheosis from './pages/Blog-Apotheosis';
import BlogSovereign from './pages/Blog-Sovereign';
import BlogLeviathan from './pages/Blog-Leviathan';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/SponsorshipPackage" element={<SponsorshipPackage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Apotheosis" element={<BlogApotheosis />} />
            <Route path="/Sovereign" element={<BlogSovereign />} />
            <Route path="/Leviathan" element={<BlogLeviathan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;