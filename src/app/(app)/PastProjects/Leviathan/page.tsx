"use client";
import BlogPage from "@/components/Blog/BlogPage";


const LeviathanPage = () => {
  const title = "Leviathan (2021-2022)";
  const image = "/previous_designs/Leviathan.png";
  const body = `The Leviathan was the first aircraft from its design cycle, setting a precedent for a design philosophy that focuses on simplicity and reliability. The aircraft consists of single-motor configuration, conventional layout with a box-shaped fuselage, and a tapered wing. The aircraft was designed with a heavy emphasis on payload capacity and reproducibility. The straightforward tapered wing design facilitated efficient aerodynamics. This configuration allowed the Leviathan to achieve a balance between payload capacity and operational efficiency, making it a versatile and dependable platform for various missions.`;

  return <BlogPage title={title} image={image} body={body} />;
};

export default LeviathanPage;
