"""
Refer to the "Demos and Exercises Guide" for the task details
for exercise E104.
"""

import pytest
from playwright.sync_api import Page, expect

@pytest.mark.skip(reason="This is a deliberately failing test for a debugging exercise.")
def test_should_submit_the_form(page: Page):
    page.goto("/a20")

    # This locator is the problem! It looks plausible but is incorrect.
    # The participant's task is to use the Trace Viewer to find the REAL class name.
    page.locator(".button-primary").click()

    # This assertion will never be reached until the locator is fixed.
    expect(page.locator("text=Submitted Successfully!")).to_be_visible()
