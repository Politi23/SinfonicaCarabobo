// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind()],
  experimental: {
    fonts: [{
      provider: fontProviders.local(),
      name: "Cinzel",
      cssVariable: "--font-cinzel",
      options: {
        variants: [{
          src: ['./src/assets/fonts/static/Cinzel-Regular.ttf'],
          weight: 400,
          style: 'normal',
        }, {
          src: ['./src/assets/fonts/static/Cinzel-SemiBold.ttf'],
          weight: 600,
          style: 'normal',
        }, {
          src: ['./src/assets/fonts/static/Cinzel-Bold.ttf'],
          weight: 700,
          style: 'normal',
        },]
      }
    }]
  }
});
