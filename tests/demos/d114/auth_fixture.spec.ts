// We import our custom 'test' object instead of the one from '@playwright/test'.
import { test, expect } from '../../fixtures/fixtures';

test.describe('D110: Using an Authentication Fixture', () => {
  // By using the 'standardUserPage' fixture, this test now clearly declares
  // its dependency on being logged in as a standard user.
  // The global setup in playwright.config.ts is no longer needed for this test.
  test.skip('should be able to access a protected page', async ({
    standardUserPage,
  }) => {
    // We use the authenticated page provided by the fixture.
    const page = standardUserPage;

    // We can navigate directly to a protected page.
    await page.goto('https://saucedemo.com/inventory.html');

    // And we can immediately assert that we are logged in.
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});
