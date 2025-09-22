import { test, expect } from '@playwright/test';

test.describe('S106: Protected Route', () => {
  test('should redirect unauthenticated users to the login page', async ({ page }) => {
    // This test runs without any saved authentication state.
    // We attempt to go directly to a page that requires a login.
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Assert that the application has redirected us back to the root (the login page).
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Assert that the specific error message for this scenario is visible.
    const errorMessage = page.getByText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
    await expect(errorMessage).toBeVisible();
  });
});