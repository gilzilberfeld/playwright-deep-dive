from playwright.sync_api import Page, expect
import os

# This is the file we will upload in our test.
# We use os.path.join to create a reliable path to the file,
# ensuring the test works regardless of where it's run from.
file_to_upload = os.path.join(os.path.dirname(__file__), "file_to_upload.txt")

def test_should_upload_a_file_successfully(page: Page):
    page.goto("/a17")

    # Playwright can interact with hidden file input elements.
    # We locate the input and use set_input_files to select the file.
    file_input_element = page.locator('input[type="file"]')
    file_input_element.set_input_files(file_to_upload)

    # After the action, we assert that the success message appears.
    success_alert = page.get_by_text("File uploaded successfully:")
    expect(success_alert).to_be_visible()
    expect(success_alert).to_contain_text("File uploaded successfully: file_to_upload.txt")

def test_should_download_a_file_successfully(page: Page):
    page.goto("/a17")

    # This is another "listen first, act second" scenario.
    # We start waiting for the 'download' event BEFORE clicking the link.
    with page.expect_download() as download_info:
        # The MUI Button with an href renders as an <a> tag, which has the role 'link'.
        page.get_by_role("link", name="Download Text File").click()
    
    download = download_info.value

    # We can assert properties of the downloaded file, like its name.
    assert download.suggested_filename == "workshop_download.txt"
