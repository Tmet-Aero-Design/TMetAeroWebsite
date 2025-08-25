"use client";
import BlogPage from "@/components/Blog/BlogPage";


const ApotheosisPage = () => {
  const title = "The Apotheosis (2023-2024)";
  const image = "/previous_designs/Apotheosis.png";
  const body = `The Apotheosis (2023-24) was the final iteration of our primary aircraft, building upon its predecessor, The Sovereign (2022-23), with significant improvements in stability and overall aerodynamic efficiency. This new design included a larger avionics package, securely housed behind an improved bulkhead for better protection. The wing configuration was retained from the previous model, supporting both wing-mounted payloads and fuselage payload bays. Additionally, enhancements were made to the roll controls with the introduction of dual ailerons, where the outboard ailerons deflect less than the inboard ailerons, minimizing the risk of wingtip stalls. The dual ailerons also provided differential spoiler functionality for air braking after touchdown, aiding in more efficient deceleration.`;

  return <BlogPage title={title} image={image} body={body} />;
};

export default ApotheosisPage;
