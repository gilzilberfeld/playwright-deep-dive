// We import our custom 'test' object again.
import { test, expect } from '../../fixtures/fixtures';

test.describe('D111: Using an API-Powered Setup Fixture', () => {
  // This test uses the 'resettablePage' fixture.
  // The test code itself is now incredibly clean. It doesn't need a beforeEach hook
  // because the fixture handles the API call to reset the state automatically.
  test('should display a count of 0 on first load', async ({
    resettablePage,
  }) => {
    const page = resettablePage;
    await page.goto('/a11', { waitUntil: 'networkidle' });
    await expect(page.getByTestId('counter-value')).toContainText('0');
  });
});
