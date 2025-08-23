import React from 'react';
import { TeamMember } from '@/types/TeamMember';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <article className="h-full bg-gray-200 dark:bg-[#1f1f1f] rounded-xl border border-gray-200 dark:border-[#333] shadow-sm hover:shadow-md transition-all duration-300 p-5">
      <div className="h-full flex flex-col sm:flex-row sm:items-start gap-5">
        {/* Image */}
        <div className="shrink-0">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-gray-200 dark:border-[#333]">
            <img
              alt={member?.name || "Team member"}
              src={member.image}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 clamp-3">{member.description}</p>
          </div>

          {/* Socials */}
          {(member.social?.facebook ||
            member.social?.twitter ||
            member.social?.instagram ||
            member.social?.linkedin) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {member.social?.facebook && (
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0d0d0d] text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  aria-label={`${member.name} on Facebook`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              )}
              {member.social?.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0d0d0d] text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  aria-label={`${member.name} on Twitter`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 4v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              )}
              {member.social?.instagram && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0d0d0d] text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  aria-label={`${member.name} on Instagram`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <circle cx="18.5" cy="5.5" r="1.5"></circle>
                  </svg>
                </a>
              )}
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0d0d0d] text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
