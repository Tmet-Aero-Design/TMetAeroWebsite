import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/TMetAeroWebsiteDev" : "", // Needs to be removed before merge to repo
  assetPrefix: isProd ? "/TMetAeroWebsiteDev/" : "",
};

export default nextConfig;
