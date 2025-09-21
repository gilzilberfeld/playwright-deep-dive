import { test, expect } from "@playwright/test";
import * as path from "path";

// This is the file we will upload in our test.
// We use path.join to create a reliable path to the file,
// ensuring the test works regardless of where it's run from.
const fileToUpload = path.join(__dirname, "file_to_upload.txt");

test.describe("D103: File Handling", () => {
  test("should upload a file successfully", async ({ page }) => {
    await page.goto("/a17");

    // Playwright can interact with hidden file input elements.SS
    // We locate the input and use setInputFiles to select the file.
    const fileInputElement = page.locator('input[type="file"]');
    await fileInputElement.setInputFiles(fileToUpload);

    // After the action, we assert that the success message appears.
    const successAlert = page.getByText("File uploaded successfully:");
    await expect(successAlert).toBeVisible();
    await expect(successAlert).toContainText("File uploaded successfully: file_to_upload.txt");
  });

  test("should download a file successfully", async ({ page }) => {
    await page.goto("/a17");

    // This is another "listen first, act second" scenario.
    // We start waiting for the 'download' event BEFORE clicking the link.
    const downloadPromise = page.waitForEvent("download");

    // *** THE FIX: The MUI Button with an href renders as an <a> tag, which has the role 'link'. ***
    await page.getByRole("link", { name: "Download Text File" }).click();

    // Now we wait for the download to complete.
    const download = await downloadPromise;

    // We can assert properties of the downloaded file, like its name.
    expect(download.suggestedFilename()).toBe("workshop_download.txt");
  });
});
