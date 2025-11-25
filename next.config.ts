import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reinostudio.com.br",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
