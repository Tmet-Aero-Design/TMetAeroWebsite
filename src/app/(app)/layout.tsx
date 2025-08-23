"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <img
                src="logo40.png"
                alt="TMet Aero Design"
                className="w-10 h-10 rounded-full p-2 bg-white dark:bg-gray-800"
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
            <img
              src="logo40.png"
              alt="TMet Aero Design"
              className="w-10 h-10 rounded-full text-white p-2 bg-white dark:bg-gray-800"
            />
            <span className="ml-3 text-xl">TMet Aero Design</span>
          </Link>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:border-gray-700 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} TMet Aero Design
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
