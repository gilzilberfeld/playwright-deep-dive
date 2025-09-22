import { test as setup } from '@playwright/test';
const authFile = 'playwright/.auth/standard_user.json';

setup('authenticate as standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await page.context().storageState({ path: authFile });
});