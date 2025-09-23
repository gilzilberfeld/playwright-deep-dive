import { test, expect } from '@playwright/test';

test.describe('S109a: Mocking an Empty API Response', () => {
  test('should display the "No products found" message', async ({ page }) => {
    // We use page.route() to intercept the GET request to the products API.
    await page.route('/api/a21/products', async (route) => {
      // We fulfill the request with a mocked JSON response.
      // By providing an empty array, we force the UI into its "empty state".
      // This is a powerful way to test edge cases without altering backend data.
      await route.fulfill({
        status: 200,
        json: { products: [] },
      });
    });

    // Now, we navigate to the page. The app's initial GET request
    // will be caught and handled by our mock.
    await page.goto('/a21');

    // We can now assert that the UI correctly rendered the "empty state" message.
    const emptyMessage = page.getByText('No products found.');
    await expect(emptyMessage).toBeVisible();
  });
});