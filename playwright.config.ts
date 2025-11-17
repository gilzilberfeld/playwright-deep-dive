import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    /* Base URL for "Plan C" (Full Local) */
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },

  projects: [
    /* ================================================================== */
    /* == DEFAULT (NO AUTH) == */
    /* This is the starting point. The extension needs this. */
    /* ================================================================== */
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /* ================================================================== */
    /* == DEMO STEP 2: SINGLE-USER AUTH (d109) == */
    /* To demo, comment out STATE 1 and uncomment this block. */
    /* ================================================================== */
    // {
    //   name: 'Setup - Standard User',
    //   // This is now specific and points to the correct file in testDir
    //   testMatch: /auth\.standard\.setup\.ts/,
    // },
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/standard_user.json',
    //   },
    //   dependencies: ['Setup - Standard User'],
    // },


  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});