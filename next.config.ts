import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next.js doesn't get confused by a stray
  // package-lock.json in a parent directory (e.g. the home folder).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
