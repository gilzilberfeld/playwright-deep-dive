import { test, expect } from "@playwright/test";

/*
  Refer to the "Demos and Exercises Guide" for the task details
  for exercise E105.
*/

test.describe("E105: The Case of the Deceptive Class Name", () => {
  test.skip("should submit the form", async ({ page }) => {
    await page.goto("/a20");

    // This locator is the problem! It looks plausible but is incorrect.
    // The participant's task is to use the Trace Viewer to find the REAL class name.
    await page.locator(".button-primary").click();

    // This assertion will never be reached until the locator is fixed.
    await expect(page.locator("text=Submitted Successfully!")).toBeVisible();
  });
});
