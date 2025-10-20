import { test, expect } from '@playwright/test';

test.describe('D112: Hybrid UI and API Testing', () => {
  test('should update backend state after UI action', async ({ page }) => {
    await page.goto('/a11');

    // Wait for the initial count to load to get a baseline.
    await expect(page.getByRole('button', { name: 'Increment' })).toBeEnabled();
    const initialText = await page.getByTestId('counter-value').innerText();
    const initialCount = parseInt(initialText, 10);

    // 1. Perform an action on the UI.
    await page.getByRole('button', { name: 'Increment' }).click();

    // 2. Instead of waiting for the UI to update, we go straight to the source.
    //    We use the page's request context to query the API directly.
    //    This is faster and more reliable than waiting for a UI element to change.
    const response = await page.request.get('/api/a11/counter');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();

    // 3. Assert that the backend state is correct.
    expect(data.count).toBe(initialCount + 1);
  });
});