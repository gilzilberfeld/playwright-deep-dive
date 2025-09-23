import { test, expect } from "@playwright/test";

test.describe("S103: File Upload Error Handling", () => {
  test("should display an error when uploading a file that is too large", async ({ page }) => {
    await page.goto("/a17");

    // To test the size limit, we need to create a file that is too large.
    // We can do this programmatically in Node.js using a Buffer.
    // Let's create a 2MB buffer filled with the letter 'a'.
    const oversizedBuffer = Buffer.alloc(2 * 1024 * 1024, "a");

    // When using setInputFiles with a buffer, we must provide a file name and mime type.
    await page.locator('input[type="file"]').setInputFiles({
      name: "oversized_file.txt",
      mimeType: "text/plain",
      buffer: oversizedBuffer,
    });

    // Now, we assert that the correct error message is displayed.
    const errorAlert = page.getByText("File is too large. Maximum size is 1MB.");
    await expect(errorAlert).toBeVisible();
  });
});
