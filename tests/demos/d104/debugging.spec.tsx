import { test, expect } from "@playwright/test";

test.describe("D104: Debugging Tools Showcase", () => {
  test("Part 1: The Grand Tour (Inspector & Trace)", async ({ page }) => {
    /*
      This is a simple, passing test we can use to explore the tools.
      1. Run with `npx playwright test --debug` to launch the Inspector.
         - Step through, explore locators.
      2. Run with `npx playwright test --trace on` to generate a trace.
         - Open `trace.zip` and give a tour of the UI.
    */
    await page.goto("/a07");
    await page.getByRole("button", { name: "Go to Page 2" }).click();
    await expect(page.getByRole("heading", { name: "App 7 - Navigation: Page 2" })).toBeVisible();
  });

  test("Part 2: Debugging a Missing Attribute", async ({ page }) => {
    /*
      This test is designed to fail to show how the Trace Viewer helps.
      INSTRUCTIONS FOR FACILITATOR:
      1. Run this test once as-is to show it passing.
      2. Go into `app/a19/page.tsx` and REMOVE the `data-testid="submit-button"` from the Button.
      3. Re-run the test. It will now fail with a timeout.
      4. Open the `trace.zip` and show the red, failing action and the log.
    */
    await page.goto("/a19");
    await page.getByLabel("Your Name").fill("Gil");
    await page.getByTestId("submit-button").click();
    await expect(page.getByText("Hello, Gil!")).toBeVisible();
  });
});
