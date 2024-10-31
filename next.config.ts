import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/storyblok/image-loader.ts",
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
