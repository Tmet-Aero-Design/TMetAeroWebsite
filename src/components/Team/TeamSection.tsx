import React, { useState } from 'react';
import SubteamSection from './SubteamSection';

interface TeamSectionProps {
  year: string;
  members: any[];
  defaultOpen?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ year, members, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  // Group members by subteam
  const groupedBySubteam = members.reduce((groups, member) => {
    const subteam = member.subteam || 'Other';
    if (!groups[subteam]) groups[subteam] = [];
    groups[subteam].push(member);
    return groups;
  }, {} as Record<string, any[]>);

  const orderedSubteams = Object.keys(groupedBySubteam);
  const panelId = `panel-${year.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className="mb-10 border border-gray-200 rounded-xl overflow-hidden bg-gray-100 dark:bg-[#1f1f1f] dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 dark:bg-[#0d0d0d] dark:hover:bg-[#1f1f1f] flex justify-between items-center transition-colors duration-300 hover:cursor-pointer"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {year} Team
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-700 ease-in-out transform origin-top ${
          open ? 'max-h-[5000px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
        }`}
      >
        <div className="px-6 py-8">
          {orderedSubteams.map((subteam) => (
            <SubteamSection key={subteam} subteam={subteam} members={groupedBySubteam[subteam]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
