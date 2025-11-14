import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 120 * 1000,

  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixels: 50, // Allow a small number of different pixels.
      threshold: 0.1     // Allow a small difference (0.1 = 10%).
    }
  },
  fullyParallel: true,
  reporter: [[ 'html', { open: "always" } ]],
  use: {
    actionTimeout: 0,
    trace: 'on',
  },
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};

export default config;