# python_tests/solutions/s106_solution.py
from playwright.sync_api import Page, expect

def test_should_redirect_unauthenticated_users_to_the_login_page(page: Page):
    # This test runs without any saved authentication state.
    # We attempt to go directly to a page that requires a login.
    page.goto('https://www.saucedemo.com/inventory.html')

    # Assert that the application has redirected us back to the root (the login page).
    expect(page).to_have_url('https://www.saucedemo.com/')

    # Assert that the specific error message for this scenario is visible.
    error_message = page.get_by_text("Epic sadface: You can only access '/inventory.html' when you are logged in.")
    expect(error_message).to_be_visible()