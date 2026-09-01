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

// Enables the Cloudflare bindings (env, ctx, caches) during `next dev` so the
// local dev server behaves like the deployed Worker. Runtime-guarded by the
// adapter, so it is a no-op in the production build.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
