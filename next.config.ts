import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Silence multi-lockfile root inference warning by pinning root
    root: __dirname,
  },
  typescript: {
    // Build on Vercel should not block deployment for missing types
    ignoreBuildErrors: false,
  },
  eslint: {
    // Lint runs in CI separately; don't block builds on warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
