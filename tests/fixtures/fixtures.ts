import { test as base, expect, Page } from '@playwright/test';
import * as path from 'path';

// Define the paths to our authentication state files.
const standardAuthFile = path.join(
  __dirname,
  '../../playwright/.auth/standard_user.json'
);
const lockedOutAuthFile = path.join(
  __dirname,
  '../../playwright/.auth/locked_out_user.json'
);

// Extend the base Playwright test object.
export const test = base.extend<{
  standardUserPage: Page;
  lockedOutUserPage: Page;
  resettablePage: Page;
}>({
  // This is the fixture for a standard, logged-in user.
  standardUserPage: async ({ browser }, use) => {
    // Create a new browser context with the saved authentication state.
    const context = await browser.newContext({
      storageState: standardAuthFile,
    });
    const page = await context.newPage();
    // Provide the authenticated page to the test.
    await use(page);
    // Clean up the context after the test.
    await context.close();
  },

  // This is the fixture for the locked-out user.
  lockedOutUserPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: lockedOutAuthFile,
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  // This is the fixture for the counter app that resets state via API.
  resettablePage: async ({ page, request }, use) => {
    // Before the test runs, we call the API to reset the counter.
    const resetResponse = await request.post('/api/a11/counter', {
      data: { newCounter: 0 },
    });
    expect(resetResponse.ok()).toBeTruthy();// Now we provide the standard page object to the test, confident that the state is clean.
    await use(page);
  },
});

export { expect } from '@playwright/test';
