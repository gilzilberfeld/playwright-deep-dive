import { test, expect } from "@playwright/test";

test.describe("S102: Visual Test with Masking", () => {
  test("the product card should be visually correct, ignoring the description", async ({ page }) => {
    await page.goto("/a16");

    // First, we locate the entire component we want to snapshot.
    const productCard = page.locator("div.MuiCard-root");

    // Next, we locate the specific, dynamic part we want to ignore.
    const descriptionInput = page.getByLabel("Cat Description");

    // Finally, we pass the locator for the dynamic part into the `mask` option.
    // Playwright will draw a pink box over this element before making the comparison.
    await expect(productCard).toHaveScreenshot("product-masked-description.png", {
      mask: [descriptionInput],
    });
  });
});
