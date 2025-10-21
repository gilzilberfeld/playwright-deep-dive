# python_tests/solutions/s107_solution.py
import os
import pytest
from playwright.sync_api import Page, expect, Browser

@pytest.fixture(scope="session")
def locked_out_user_auth_file(browser: Browser):
    """Ensures the auth file for the locked-out user exists."""
    auth_file = os.path.abspath(os.path.join(
        os.path.dirname(__file__),
        '../../../playwright/.auth/locked_out_user.json'
    ))
    if not os.path.exists(auth_file):
        page = browser.new_page()
        page.goto('https://www.saucedemo.com/')
        page.locator('[data-test="username"]').fill('locked_out_user')
        page.locator('[data-test="password"]').fill('secret_sauce')
        page.locator('[data-test="login-button"]').click()
        expect(page.locator('[data-test="error"]')).to_be_visible()
        page.context.storage_state(path=auth_file)
        page.close()
    return auth_file

@pytest.fixture
def locked_out_user_page(browser: Browser, locked_out_user_auth_file: str) -> Page:
    """Provides a page pre-authenticated as the locked-out user."""
    context = browser.new_context(storage_state=locked_out_user_auth_file)
    page = context.new_page()
    yield page
    context.close()

# --- THE TESTS ---

# Test case for the standard user (the "happy path")
def test_standard_user_can_access_inventory(standard_user_page: Page):
    """
    This test uses the 'standard_user_page' fixture from conftest.py.
    It verifies that a logged-in standard user can see the inventory page.
    """
    page = standard_user_page
    page.goto('https://www.saucedemo.com/inventory.html')
    
    # Assert that the core inventory elements are visible
    expect(page.locator('.inventory_list')).to_be_visible()
    expect(page.locator('#shopping_cart_container a')).to_be_visible()

# Test case for the locked-out user (the "negative path")
def test_locked_out_user_is_redirected_with_error(locked_out_user_page: Page):
    """
    This test uses the 'locked_out_user_page' fixture from conftest.py.
    It verifies that a locked-out user is correctly denied access and sees an error.
    """
    page = locked_out_user_page
    page.goto('https://www.saucedemo.com/inventory.html')
    
    # Assert that the user is NOT on the inventory page.
    # They should be redirected back to the login page (root URL).
    expect(page).to_have_url('https://www.saucedemo.com/')
    
    # Assert that the specific error message for a locked-out user is visible.
    expect(page.locator('[data-test="error"]')).to_be_visible()
    expect(page.locator('[data-test="error"]')).to_contain_text("Epic sadface: You can only access '/inventory.html' when you are logged in.")