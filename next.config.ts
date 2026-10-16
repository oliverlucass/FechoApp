import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import type { NextConfig } from "next";

const workerDest = join(process.cwd(), "public/maplibre-gl-worker.mjs");
mkdirSync(dirname(workerDest), { recursive: true });
copyFileSync(join(process.cwd(), "node_modules/maplibre-gl/dist/maplibre-gl-worker.mjs"), workerDest);

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
