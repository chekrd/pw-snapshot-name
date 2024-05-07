import {join} from 'node:path';
import {cwd} from 'node:process';
import {defineConfig, devices} from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';

export default defineConfig({
  testDir: './',
  testMatch: '**/*.uitest.tsx',
  snapshotPathTemplate: '{testDir}/snapshots/{arg}{-projectName}{ext}',
  retries: 0,
  reporter: './playwright/reporters/screenComparisonReporter.ts',
  use: {
    trace: 'on-first-retry',
    ctCacheDir: join(cwd(), '/node_modules/.cache/playwright'),
    ctViteConfig: {
      build: {
        emptyOutDir: true,
      },
      plugins: [
        react(),
      ],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    }
  ],
});
