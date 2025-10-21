"""
Refer to the "Demos and Exercises Guide" for the task details
for exercise E104b.
"""

from playwright.sync_api import Page, expect

def test_should_enable_the_button_after_checking_the_box(page: Page):
    page.goto("/a18")

    submit_button = page.get_by_role("button", name="Submit")
    terms_checkbox = page.get_by_label("I agree to the terms and conditions")

    terms_checkbox.check()

    is_button_disabled = submit_button.is_disabled()
    assert not is_button_disabled

    submit_button.click()
