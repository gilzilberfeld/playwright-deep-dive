import { test, expect } from '@playwright/test';

// We still use .serial to ensure these stateful tests don't run at the same
// time as each other.
test.describe.serial('S112: API State Reset', () => {
  // The beforeEach hook is still the right place to reset state.
  test.beforeEach(async ({ request }) => {
    const response = await request.post('/api/a11/counter', {
      data: { newCounter: 0 },
    });
    expect(response.ok()).toBeTruthy();
  });

  test('should display a count of 0 on first load after reset', async ({
    page,
  }) => {
    // THE FIX: We add `{ waitUntil: 'networkidle' }`.
    // This tells Playwright to wait until the page has loaded AND
    // there have been no new network requests for 500ms.
    // This guarantees that the app's initial GET request has completed
    // before we move on to the assertion.
    await page.goto('/a11', { waitUntil: 'networkidle' });

    await expect(page.getByTestId('counter-value')).toContainText('0');
  });

  test('should increment to 1 after reset', async ({ page }) => {
    // We use 'networkidle' here as well for consistency and robustness.
    await page.goto('/a11', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Increment' }).click();
    await expect(page.getByTestId('counter-value')).toContainText('1');
  });

  
});

