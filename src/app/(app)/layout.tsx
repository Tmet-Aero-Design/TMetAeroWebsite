"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const videoSection = document.querySelector(".video-section");
      if (!videoSection) return;

      const videoSectionHeight = videoSection.clientHeight;
      setIsScrolled(window.scrollY + 50 > videoSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <div className="antialiased flex flex-col min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Header */}
      <header
        className={`fixed w-full z-20 transition-all duration-300
            ${isHomePage
            ? isScrolled
                ? "header-bg-light-or-dark"
                : "header-bg-transparent text-white no-border"
            : "header-bg-white text-gray-900 dark:text-gray-100"
            }`}
        >

        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <Image
              src="logo40.png"
              alt="TMet Aero Design"
              className="w-10 h-10 rounded-full p-2 bg-white dark:bg-gray-800"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">TMet Aero Design</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 dark:hover:text-gray-200">
                Home
            </Link>
            <Link href="/OurTeam" className="mr-5 hover:text-gray-900 dark:hover:text-gray-200">
                Our Team
            </Link>
            <Link href="/SponsorshipPackage" className="mr-5 hover:text-gray-900 dark:hover:text-gray-200">
                Sponsorship Package
            </Link>
            <Link href="/ContactUs" className="mr-5 hover:text-gray-900 dark:hover:text-gray-200">
                Contact Us
            </Link>
            </nav>
        </div>
      </header>



      {/* Main content */}
      <main className={`flex-grow ${isHomePage ? "" : "pt-24"}`}>{children}</main>

      {/* Footer */}
      <footer className="text-gray-600 dark:text-gray-400 body-font mt-10">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100"
          >
            <Image
              src="logo40.png"
              alt="TMet Aero Design"
              className="w-10 h-10 rounded-full text-white p-2 bg-white dark:bg-gray-800"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">TMet Aero Design</span>
          </Link>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:border-gray-700 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} TMet Aero Design
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href='https://www.facebook.com/ryersonaerodesign' target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          {/* <a className="ml-3 text-gray-500" >
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a> */}
          <a className="ml-3 text-gray-500" href='https://www.instagram.com/tmetaerodesign' target="_blank" rel="noopener noreferrer">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-2 text-gray-500" href='https://www.linkedin.com/company/tmet-aero-design/' target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
