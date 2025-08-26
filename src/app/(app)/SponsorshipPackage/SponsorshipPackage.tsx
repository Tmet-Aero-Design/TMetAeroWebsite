"use client";

import React, { useRef, useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const SponsorshipPackage: React.FC = () => {
  const viewerRef = useRef(null);
  const fileUrl = "/content/TMAD Sponsorship Package 2025 - 2026.pdf";
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-16 bg-white text-gray-900 dark:bg-[#0d0d0d] dark:text-white transition-colors duration-500">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Sponsorship Package 2025 - 2026
      </h1>

      <div className="w-full max-w-[1200px] px-4 sm:px-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="bg-gray-100 dark:bg-[#1a1a1a] shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
            {/* Scrollable viewer container */}
            <div className="h-[80vh] overflow-auto">
              <Viewer   
                fileUrl={fileUrl}
                ref={viewerRef}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1.0}
                theme={isDarkMode ? "dark" : "light"} // dynamically change theme
              />
            </div>
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default SponsorshipPackage;
