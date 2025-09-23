import { test, expect } from '@playwright/test';

test.describe('S104b: The Disappearing Act', () => {
  test('should enable the button after checking the box', async ({ page }) => {
    await page.goto('/a18');

    const submitButton = page.getByRole('button', { name: 'Submit' });
    const termsCheckbox = page.getByLabel('I agree to the terms and conditions');

    await termsCheckbox.check();
    await expect(submitButton).toBeEnabled();

    await submitButton.click();
  });
});