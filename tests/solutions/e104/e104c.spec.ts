import { test, expect } from '@playwright/test';

test.describe('S104c: The Fleeting Element Challenge', () => {
  test('should verify the success message appears', async ({ page }) => {
    await page.goto('/a22');

    // The action that triggers the fleeting element.
    await page.getByRole('button', { name: 'Show Success Message' }).click();

    // THE FIX: The key to testing a fleeting element is to use a locator
    // and an assertion that Playwright can auto-retry.
    // When the button is clicked, Playwright will immediately start looking
    // for the alert. It will wait until it appears and its text is correct.
    // Because the assertion completes before the 2-second timeout, the test
    // reliably passes. The Trace Viewer would show a naive test failing
    // because it might check for the element *after* it has disappeared.
    const successAlert = page.getByText('Action was successful!');
    await expect(successAlert).toBeVisible();

    // Bonus assertion: We can also assert that the element eventually disappears.
    // This confirms the full lifecycle of the toast component.
    await expect(successAlert).not.toBeVisible({ timeout: 3000 });
  });
});
