import { test, expect } from '@playwright/test';

test.describe('Simple Navigation', () => {
  test('should navigate to page 2 and back', async ({ page }) => {
    await page.goto('/a07');

    // Navigate to Page 2 using the 'button' role
    await page.getByRole('button', { name: 'Go to Page 2' }).click();
    await expect(page).toHaveURL(/.*a07\/page2/);
    await expect(page.getByRole('heading', { name: 'App 7 - Navigation: Page 2' })).toBeVisible();

    // Navigate back
    await page.goBack();
    await expect(page).toHaveURL(/.*a07/);
    // Assert the heading on the main page is correct
    await expect(page.getByRole('heading', { name: 'App 7 - Navigation: Page 1' })).toBeVisible();
  });
});

