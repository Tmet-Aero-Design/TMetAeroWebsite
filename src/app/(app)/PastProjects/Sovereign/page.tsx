"use client";
import BlogPage from "@/components/Blog/BlogPage";


const SovereignPage = () => {
  const title = "The Sovereign (2022-2023)";
  const image = "/previous_designs/Sovereign.png";
  const body = `The Sovereign (2022-23) was the next generation of our primary aircraft, derived heavily from its predecessor, Leviathan (2021-22). The main difference being that The Sovereign was designed to carry significantly more payload while retaining relatively similar structural weight. The design featured a single-motor, conventional layout with a box-shaped fuselage for simplicity. The wing planform was altered to incorporate a rectangular inboard section and a tapered outboard section, departing from the previous aircraft's straightforward tapered wing configuration. This modification not only increased the payload capacity but also facilitated asymmetrical loading, which played a significant role in balancing the weight of the “targeting pod” mounted underneath the port-side wing.`;

  return <BlogPage title={title} image={image} body={body} />;
};

export default SovereignPage;
