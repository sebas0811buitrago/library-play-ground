/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { buildPlugin } from 'vite-plugin-build';
import react from '@vitejs/plugin-react';

const isWatch = process.env.npm_lifecycle_event === 'watch';

export default defineConfig({
  plugins: [
    react(),
    buildPlugin({
      fileBuild: {
        ignoreInputs: [
          './src/playground/*',
          './src/stories/*',
          '**/__snapshots__/**',
          'src/**/*.test.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/**/*.test.tsx',
          'src/test'
        ],
        emitDeclaration: true,
        esOutputDir: './build',
        commonJsOutputDir: "./lib",
        ...(isWatch && { watch: {} })
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true
  }
});
