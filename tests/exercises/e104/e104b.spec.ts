import { test, expect } from "@playwright/test";

/*
  Refer to the "Demos and Exercises Guide" for the task details
  for exercise E104b.
*/

test.describe("E104b: The Disappearing Act", () => {
  test("should enable the button after checking the box", async ({ page }) => {
    await page.goto("/a18");

    const submitButton = page.getByRole("button", { name: "Submit" });
    const termsCheckbox = page.getByLabel("I agree to the terms and conditions");

    await termsCheckbox.check();

    const isButtonDisabled = await submitButton.isDisabled();
    expect(isButtonDisabled).toBe(false);

    await submitButton.click();
  });
});
