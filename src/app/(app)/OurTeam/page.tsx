"use client";

import React from "react";
import teamData2024_2025 from "@/data/teamData2024_2025";
import teamData2025_2026 from "@/data/teamData2025_2026";
import TeamSection from "@/components/Team/TeamSection";

const allTeamData = {
  "2025-2026": teamData2025_2026,
  "2024-2025": teamData2024_2025,
};

const OurTeamPage = () => {
  return (
    <section className="body-font custom-section bg-gray-300 dark:bg-[#0d0d0d] text-gray-700 dark:text-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-gray-900 dark:text-gray-100">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-300">
            Meet our talented team of engineers and designers, committed to pushing the boundaries of innovation and excellence.
          </p>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-6 rounded"></div>
        </div>

        {Object.entries(allTeamData).map(([year, members]) => (
          <TeamSection
            key={year}
            year={year}
            members={members}
            defaultOpen={year === "2025-2026"}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeamPage;
