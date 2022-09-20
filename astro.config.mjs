import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true,
      applyAstroPreset: false
    }
  }), react(), image(), prefetch(), sitemap(), compress()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  output: 'server',
  adapter: vercel()
});