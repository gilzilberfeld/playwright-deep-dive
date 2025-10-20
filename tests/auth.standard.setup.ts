import { test as setup, expect } from '@playwright/test';

// Define the file where the authentication state will be saved.
const authFile = 'playwright/.auth/standard_user.json';

setup('authenticate', async ({ page }) => {
  // Navigate to the login page.
  await page.goto('https://www.saucedemo.com/');

  // Perform the login steps.
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  // Save the authentication state to the file.
  await page.context().storageState({ path: authFile });
});
