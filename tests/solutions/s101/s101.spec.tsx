import { test, expect } from "@playwright/test";

test.describe("S101: Multi-Page User Journey", () => {
  test("should navigate through a multi-page flow and back", async ({ page }) => {
    await page.goto("/a07");

    // 1. Navigate from the main page through to Page 3.
    await page.getByRole("button", { name: "Go to Page 2" }).click();
    await page.getByRole("button", { name: "Go to Page 3" }).click();

    // 2. On Page 3, assert the heading is correct.
    await expect(page).toHaveURL(/.*a07\/page3/);
    await expect(page.getByRole("heading", { name: "App 7 - Navigation: Page 3" })).toBeVisible();

    // 3. Navigate back to the main page using the browser's back functionality.
    await page.goBack();
    await page.goBack();

    // 4. Assert you have successfully returned to the main page.
    await expect(page).toHaveURL(/.*a07/);
    await expect(page.getByRole("heading", { name: "App 7 - Navigation: Page 1" })).toBeVisible();
  });
});
