import { existsSync, readFileSync } from "node:fs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cleanDistDir: false,
  distDir: process.env.NEXT_DIST_DIR || (process.env.NODE_ENV === "development" ? ".next-dev" : existsSync(".production-build") ? readFileSync(".production-build", "utf8").trim() : ".next"),
  experimental: process.env.NEXT_BUILD_SERIAL === "1" ? { cpus: 1, staticGenerationMaxConcurrency: 1 } : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
