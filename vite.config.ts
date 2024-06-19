/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
// @ts-expect-error Ignore since no types
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    eslint({
      failOnError: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
});
