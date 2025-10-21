import { test, expect } from '@playwright/test';

test.describe('D107: API Mocking - Forcing Error States', () => {
  test('should display an error message when the API fails', async ({ page }) => {
    // We use page.route() to intercept network requests.
    // The first argument is a glob pattern for the URL to intercept.
    await page.route('/api/a11/counter', async (route) => {
      // Inside the handler, we can choose how to respond to the request.
      // route.fulfill() allows us to send a completely mocked response.
      // Here, we simulate a server error.
      console.log('Intercepted API call and mocking a 500 error.');
      await route.fulfill({
        status: 500,
        json: { error: 'Internal Server Error' },
      });
    });

    // Now, we navigate to the page. The app's initial GET request
    // will be caught and handled by our mock.
    await page.goto('/a11');

    // We can now assert that the UI correctly handled the error state.
    const errorMessage = page.getByText('Failed to load counter');
    await expect(errorMessage).toBeVisible();
  });
});
