import { test as setup } from '@playwright/test';
const authFile = 'playwright/.auth/locked_out_user.json';

setup('authenticate as locked out user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.context().storageState({ path: authFile });
});