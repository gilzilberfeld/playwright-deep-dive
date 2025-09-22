import { test, expect } from '@playwright/test';

test.describe('Authenticated Tests', () => {
  // This test will fail if not run with the --project flag that uses the saved auth state.
  // For example: npx playwright test tests/demos/d108/authenticated-test.spec.ts --project=chromium
  //
  // Because the project is configured with `storageState: 'playwright/.auth/user.json'`,
  // this test will start with the browser context already authenticated.
  test.skip('should be able to access a protected page', async ({ page }) => {
    // We navigate directly to a page that requires login.
    // There are NO login steps in this test.
    await page.goto('https://www.saucedemo.com/inventory.html');

    // We can immediately assert that we are on the correct page and can see
    // elements that are only visible to logged-in users.
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.locator('#shopping_cart_container')).toBeVisible();
  });
});