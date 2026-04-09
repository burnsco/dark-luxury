import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://dark-luxury.coreyburns.ca",
  output: "static",
  adapter: cloudflare(),
  integrations: [react(), sitemap()],
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
});
