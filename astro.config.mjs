// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {string} */
const siteBase = process.env.SITE_BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: siteBase,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@/components": path.resolve(__dirname, "./src/components/site"),
        "@/hooks": path.resolve(__dirname, "./src/components/site/hooks"),
      },
    },
  },
});
