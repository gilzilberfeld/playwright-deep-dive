import { test, expect } from '@playwright/test';

/*
  Refer to the "Demos and Exercises Guide" for the task details
  for exercise E114.
*/

// This test currently relies on the global setup in playwright.config.ts
// and the --project flag to run correctly. Your task is to refactor it
// to use the custom fixtures we've created.
test.describe('E110: Refactoring Challenge', () => {
  test('standard user should see the inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('locked out user should see an error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    const errorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    await expect(errorMessage).toBeVisible();
  });
});