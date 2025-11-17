import { test, expect } from '@playwright/test';

test.describe('S104c: The Fleeting Element Challenge', () => {
  test('should verify the success message appears', async ({ page }) => {
    await page.goto('/a22');

    // The action that triggers the fleeting element.
    await page.getByRole('button', { name: 'Show Success Message' }).click();

    // We can't use getByRole('alert', { name: ... }) because the text
    // is a child, not the accessible name of the alert.
    // We can't use getByText(...) alone because it's ambiguous
    // and resolves to two elements with role="alert".
    //
    // The most specific locator is to find the alert element that
    // ALSO has our text inside it. This uniquely finds the
    // Snackbar and ignores the hidden Next.js route announcer.
    const successAlert = page
      .getByRole('alert')
      .filter({ hasText: 'Action was successful!' });
    await expect(successAlert).toBeVisible();

    // Bonus assertion: We can also assert that the element eventually disappears.
    // This confirms the full lifecycle of the toast component.
    await expect(successAlert).not.toBeVisible({ timeout: 3000 });
  });
});
