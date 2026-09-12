import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {}, // Suppress the Turbopack + webpack warning
};

export default nextConfig;
