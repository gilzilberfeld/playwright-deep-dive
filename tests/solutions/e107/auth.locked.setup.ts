import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/locked_out_user.json';

setup('authenticate locked_out_user@saucedemo', async ({ page }) => {
  // Go directly to SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with SauceDemo credentials for the locked out user
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Important: Even though the user is locked out, SauceDemo still
  // sets some session state/cookies after the attempt.
  // We need to save this state to correctly simulate a locked-out session.
  // We don't need to wait for a specific element, just save the state after the attempt.

  // Save the auth state
  await page.context().storageState({ path: authFile });
});