import { test, expect } from "@playwright/test";

/*
Scenario:
The UX team has designed a specific hover effect for the buttons on the product card
on page /a15. They want a test to ensure this visual feedback is never accidentally broken.

Your Task:
Create a visual regression test that specifically verifies the appearance
of the "Learn More" button *while it is being hovered over*.

Hint: You will need to perform an action before the assertion.

Discussion Points:
- How would you test other interactive states, like :focus or :active?
- Could this test be flaky? What could cause it to fail unreliably?
*/

test.describe("E103: Visual Test of Hover State", () => {
  test("the button should change appearance on hover", async ({ page }) => {
    // Your test implementation goes here.
    await page.goto("/a15");

    const productCard = page.locator("div.MuiCard-root");
    const learnMoreButton = productCard.getByRole("button", { name: "Learn More" });
    await learnMoreButton.hover();
    await expect(learnMoreButton).toHaveScreenshot("button-hover-state.png");
  });
});
