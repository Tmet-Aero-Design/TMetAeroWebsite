"use client";
import BlogPage from "@/components/Blog/BlogPage";


const ProgenitorPage = () => {
  const title = "The Progenitor (2025-2026)";
  const image = "/previous_designs/Progenitor.png";
  const body = `The Progenitor (2025-2026) was developed as TMAD's entry for the 2026 SAE Aero Design East Regular Class and represented one of the team's boldest aircraft configurations to date. Departing from conventional single-wing layouts, it adopted a tandem-wing, twin-motor configuration designed to maximize payload capability within the competition's 4S electric power limits. With a fuselage sized around seven 2-L water bottles and a structure focused around ease of manufacturing and straightforward payload integration, The Progenitor was built as a heavy-lift aircraft with scoring performance at the center of its design. The aircraft also placed 4th in Flight Demonstration Readiness Review and 5th in the Technical Report for SAE Aero Design 2026 East.`;

  return <BlogPage title={title} image={image} body={body} />;
};

export default ProgenitorPage;
