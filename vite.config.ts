/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      preserveEntrySignatures: 'strict',
      output: [
        {
          name: 'index',
          format: 'esm',
          entryFileNames: '[name].esm.mjs',
          preserveModules: true,
          exports: 'named'
        },
        {
          name: 'index',
          format: 'cjs',
          entryFileNames: '[name].cjs.js',
          preserveModules: true,
          exports: 'named'
        },
      ],
    },
  },
});
