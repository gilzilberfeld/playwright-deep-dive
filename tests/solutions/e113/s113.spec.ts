import { test, expect } from '@playwright/test';

test.describe('S113: Mocking a Slow Network to Test Loading States', () => {
  test('should display the loading spinner while waiting for the API', async ({
    page,
  }) => {
    // This is an advanced pattern for controlling the timing of a mocked response.
    // We create a promise that we can resolve manually from outside its scope.
    let fulfillRoute: (value: unknown) => void;
    const routePromise = new Promise((resolve) => {
      fulfillRoute = resolve;
    });

    // We intercept the API call.
    await page.route('/a14/page2', async (route) => {
      // When the request is intercepted, we tell it to wait for our external promise.
      await routePromise;
      // Once the promise resolves, we let the real API call continue.
      await route.continue();
    });

    // We start the navigation. The browser will be "stuck" in a loading state
    // because the API call we intercepted has not yet completed.
    await page.goto('/a14');
    await page.getByRole('button', { name: 'Go To Page 2' }).click();

    // At this exact moment, the API call is paused. This gives us a perfect,
    // stable window to assert that the loading spinner is visible.
    await expect(page.getByRole('progressbar')).toBeVisible();

    // Now, we resolve the promise, which "un-pauses" the API call.
    // @ts-ignore
    fulfillRoute();

    // Finally, we can assert that the page has finished loading and the
    // spinner has disappeared.
    await expect(page.getByRole('progressbar')).not.toBeVisible();
    await expect(page.getByText('You Have Arrived')).not.toBeEmpty();
  });
});