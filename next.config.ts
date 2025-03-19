import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  swcMinify: true,
  images: {
    unoptimized: true, // For Cloudflare Pages compatibility
  },
};

export default nextConfig;
