import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Silence multi-lockfile root inference warning by pinning root
    root: __dirname,
  },
  typescript: {
    // Do not block builds on type errors in CI/Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint runs in CI separately; don't block builds on warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
