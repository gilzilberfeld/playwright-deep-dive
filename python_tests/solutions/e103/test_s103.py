# python_tests/solutions/s103_solution.py
from playwright.sync_api import Page, expect

def test_should_display_an_error_when_uploading_a_file_that_is_too_large(page: Page):
    page.goto("/a17")

    # To test the size limit, we need to create a file that is too large.
    # We can do this programmatically in Python by creating a bytes object.
    # Let's create a 2MB object filled with the byte representation of the letter 'a'.
    oversized_buffer = b"a" * (2 * 1024 * 1024)

    # When using set_input_files with a buffer, we pass a dictionary-like payload
    # for the 'files' argument, including name, mime_type, and the buffer itself.
    page.locator('input[type="file"]').set_input_files(
        files={
            "name": "oversized_file.txt",
            "mimeType": "text/plain",
            "buffer": oversized_buffer,
        }
    )

    # Now, we assert that the correct error message is displayed.
    error_alert = page.get_by_text("File is too large. Maximum size is 1MB.")
    expect(error_alert).to_be_visible()