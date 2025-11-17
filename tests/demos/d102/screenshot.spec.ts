import { test, expect } from "@playwright/test";

test.describe("D102: Visual Regression Testing", () => {
  test("should match the baseline screenshot for the product card", async ({ page }) => {
    // We navigate to our new, dedicated page for this lesson.
    await page.goto("/a15");

    // It's best practice to take a screenshot of a specific, stable element
    // rather than the whole page. This makes the test less brittle.
    const productCard = page.locator("div.MuiCard-root");

    // The first time you run this test, it will fail because no baseline screenshot exists.
    // You must run the test with the `-u` or `--update-snapshots` flag to create the baseline.
    // E.g., npx playwright test tests/demos/d102/visual.spec.ts -u
    //
    // On subsequent runs, Playwright will compare the new screenshot with the baseline.
    // If they don't match, the test will fail.
    await expect(productCard).toHaveScreenshot("featured-product.png");
  });
});

test.describe("D102: Visual Testing with Masking", () => {
  test("should match the baseline while ignoring dynamic content", async ({ page }) => {
    await page.goto("/a16");

    const productCard = page.locator("div.MuiCard-root");
    const descriptionImage = page.getByLabel("Cat Description");

    // We can tell Playwright to "mask" multiple elements by passing their locators
    // in an array. This is perfect for handling dynamic images, ads, or user-generated content
    // in addition to the editable text field.
    await expect(productCard).toHaveScreenshot("product-with-mask.png", {
      mask: [descriptionImage],
    });
  });
});
