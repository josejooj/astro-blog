// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
      port: 80,
      host: true,
      allowedHosts: ["josejooj-astroblog.squareweb.app"]
  },

  prefetch: {
      defaultStrategy: "viewport",
      prefetchAll: true
  },

  site: "josejooj-astroblog.squareweb.app",

  integrations: [preact()]
});