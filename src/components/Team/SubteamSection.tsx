import React from 'react';
import TeamMemberCard from './TeamMemberCard';

interface SubteamSectionProps {
  subteam: string;
  members: any[];
}

const SubteamSection: React.FC<SubteamSectionProps> = ({ subteam, members }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 dark:text-gray-100">
        {subteam}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
};

export default SubteamSection;
