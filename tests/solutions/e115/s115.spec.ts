// We import our custom 'test' object which contains all our fixtures.
import { test, expect } from '../../fixtures/fixtures';

test.describe('S115: Refactored to Use Fixtures', () => {
  // This test now explicitly uses the 'standardUserPage' fixture.
  // It is self-contained and no longer relies on global config.
  test.skip('standard user should see the inventory', async ({
    standardUserPage,
  }) => {
    const page = standardUserPage;
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  // This test explicitly uses the 'lockedOutUserPage' fixture.
  test('locked out user should see an error', async ({ lockedOutUserPage }) => {
    const page = lockedOutUserPage;
    // Note: The locked out user can still "log in", but is blocked from the inventory.
    // The assertion is that they are redirected back to the root and shown an error.
    await page.goto('https://www.saucedemo.com/inventory.html');
    const errorMessage = page.getByText(
      'Epic sadface: You can only access \'/inventory.html\' when you are logged in.'
    );
    await expect(errorMessage).toBeVisible();
  });
});