import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Required for static export
  trailingSlash: true,     // Critical for IPFS compatibility
  images: {
    unoptimized: true      // Required since no server
  }
};

export default nextConfig;
