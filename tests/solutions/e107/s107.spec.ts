import { test, expect } from '@playwright/test';

/*
  Refer to the "Demos and Exercises Guide" for the task details
  for exercise E107.
*/

test.describe('E107: Multi-Role Authentication', () => {
  test('the cart icon should be correct for the logged in user', async ({ page }) => {
    // This test needs to be run against different user roles.
    // The test logic itself is simple: just check the cart link.
    // The complexity is in the project setup in playwright.config.ts.
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
  });
});