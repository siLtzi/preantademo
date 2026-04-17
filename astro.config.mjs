// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Load .env file manually since import.meta.env isn't available in config
const envFile = readFileSync(resolve(process.cwd(), '.env'), 'utf-8');
for (const line of envFile.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const [key, ...rest] = trimmed.split('=');
  process.env[key.trim()] = rest.join('=').trim();
}

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
      stega: {
        studioUrl: '/studio',
      },
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      include: ['react/compiler-runtime'],
    },
  },
});
