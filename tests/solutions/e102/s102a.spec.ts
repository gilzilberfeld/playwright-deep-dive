import { test, expect } from "@playwright/test";

test.describe("S102a: Visual Test with Masking", () => {
  test("the cat card should be visually correct, ignoring the image", async ({ page }) => {
    await page.goto("/a16");

    // First, we locate the entire component we want to snapshot.
    const productCard = page.locator("div.MuiCard-root");

    // Next, we locate the specific, dynamic part we want to ignore.
    const imgInput = page.getByRole('img', { name: 'featured cat' })

    // Finally, we pass the locator for the dynamic part into the `mask` option.
    // Playwright will draw a pink box over this element before making the comparison.
    await expect(productCard).toHaveScreenshot("cat-masked-image.png", {
      mask: [imgInput],
    });
  });
});
