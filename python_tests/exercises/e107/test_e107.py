"""
Refer to the "Demos and Exercises Guide" for the task details
for exercise E107.
"""

from playwright.sync_api import Page, expect

def test_the_cart_icon_should_be_correct_for_the_logged_in_user(page: Page):
    # This test needs to be run against different user roles.
    # The test logic itself is simple: just check the cart link.
    # The complexity is in the project setup in the pytest configuration.
    page.goto('https://www.saucedemo.com/inventory.html')
    expect(page.locator('#shopping_cart_container a')).to_be_visible()
