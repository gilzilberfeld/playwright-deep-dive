"""
Refer to the "Demos and Exercises Guide" for the task details
for exercise E114.

This test currently relies on the global setup in the pytest configuration
and command-line flags to run correctly. Your task is to refactor it
to use the custom fixtures we've created.
"""

from playwright.sync_api import Page, expect

def test_standard_user_should_see_the_inventory(page: Page):
    page.goto('https://www.saucedemo.com/inventory.html')
    expect(page.locator('.inventory_list')).to_be_visible()

def test_locked_out_user_should_see_an_error(page: Page):
    page.goto('https://www.saucedemo.com/inventory.html')
    error_message = page.get_by_text('Epic sadface: Sorry, this user has been locked out.')
    expect(error_message).to_be_visible()
