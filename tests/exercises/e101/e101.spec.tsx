import { test, expect } from "@playwright/test";

test.describe("E101: Multi-Page User Journey", () => {
  test("should navigate through a multi-page flow and back", async ({ page }) => {
    // Scenario: This first exercise is a warm-up designed to get you familiar
    // with the workshop's rhythm: tackling a common scenario, exploring different
    // ways to solve it, and preparing for a group discussion.
    //
    // Acceptance Criteria:
    // 1. From the main page (`/a07`), navigate through to Page 3.
    // 2. On Page 3, assert the heading is correct.
    // 3. Navigate back to the main page using the browser's back functionality.
    // 4. Assert you have successfully returned to the main page.

    await page.goto("/a07");

    // Your test code goes here
  });
});
