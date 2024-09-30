    // src/pages/OurTeam.js

    import React from 'react';
    import teamMembers from '../teamData';

    const OurTeam = () => {

      const groupedBySubteam = teamMembers.reduce((groups, member) => {
        const subteam = member.subteam || "Other"; // Default group if subteam is missing
        if (!groups[subteam]) {
          groups[subteam] = [];
        }
        groups[subteam].push(member);
        return groups;
      }, {});

      return (
        <section className="text-gray-600 body-font custom-section">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Meet our talented team of engineers and designers, committed to pushing the boundaries of innovation and excellence.
              </p>
            </div>

          {Object.keys(groupedBySubteam).map((subteam) => (
            <div key={subteam} className="mb-12">
            {/* Subteam Header */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">{subteam}</h2>

            {/* Team Members for this subteam */}
            <div className="lg:flex flex-wrap -m-4">
              {groupedBySubteam[subteam].map((member, index) => (
                <div key={index} className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team member" style={{ width: '192px', height: '192px' }} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={member.image} />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                      <h3 className="text-gray-500 mb-3">{member.role}</h3>
                      <p className="mb-4">{member.description}</p>
                      <span className="inline-flex">
                        {member.social.facebook && (
                          <a href={member.social.facebook} target='_blank' rel="noreferrer" className="mr-2 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target='_blank' rel="noreferrer" className="mr-2 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} target='_blank' rel="noreferrer" className="mr-2 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target='_blank' rel="noreferrer" className="mr-2 text-gray-500">
                          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                          </a>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
