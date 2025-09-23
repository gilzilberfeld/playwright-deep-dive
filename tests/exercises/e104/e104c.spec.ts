import { test, expect } from '@playwright/test';

/*
  Refer to the "Demos and Exercises Guide" for the task details
  for exercise E104c.
*/

test.describe('S104c: The Fleeting Element Challenge', () => {
 test('should verify the success message appears and then disappears', async ({
    page,
  }) => {
    await page.goto('/a22');

    await page.getByRole('button', { name: 'Show Success Message' }).click();
    const successAlert = page.getByRole('alert');
    await expect(successAlert).toBeVisible();

    await expect(successAlert).not.toBeVisible({ timeout: 3000 });
  });
});
