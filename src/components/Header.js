import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.querySelector('.video-section');
      if (videoSection) {
        const videoSectionHeight = videoSection.clientHeight;
        setIsScrolled(window.scrollY > videoSectionHeight);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header className={`text-gray-600 body-font fixed w-full z-10 transition-all duration-300 ${isHomePage ? (isScrolled ? 'header-bg-white' : 'bg-transparent') : 'header-bg-white'}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <img src="logo40.png" alt="TMet Aero Design" style={{ backgroundColor: "white"}} className="w-10 h-10 rounded-full text-white p-2" />
          <span className="ml-3 text-xl">TMet Aero Design</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
          <Link className="mr-5 hover:text-gray-900" to="/OurTeam">Our Team</Link>
          <Link className="mr-5 hover:text-gray-900" to="/SponsorshipPackage">Sponsorship Package</Link>
          <Link className="mr-5 hover:text-gray-900" to="/ContactUs">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
