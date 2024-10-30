import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "a.storyblok.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
