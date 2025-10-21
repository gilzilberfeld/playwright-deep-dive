# python_tests/conftest.py
import os
import pytest
from playwright.sync_api import Page, Browser, APIRequestContext, expect

# --- Helper function for login logic ---
def _perform_standard_user_login(page: Page, auth_file_path: str):
    """Logs in as standard_user and saves auth state."""
    page.goto('https://www.saucedemo.com/')
    page.locator('[data-test="username"]').fill('standard_user')
    page.locator('[data-test="password"]').fill('secret_sauce')
    page.locator('[data-test="login-button"]').click()
    expect(page.locator('.inventory_list')).to_be_visible()
    page.context.storage_state(path=auth_file_path)

# --- Fixtures ---

@pytest.fixture(scope="session")
def standard_user_auth_file(browser: Browser):
    """
    Fixture to ensure the auth file for the standard user exists.
    If the file doesn't exist, it logs in and creates it.
    This runs only once per test session.
    """
    auth_file = os.path.abspath(os.path.join(
        os.path.dirname(__file__),
        '../playwright/.auth/standard_user.json'
    ))

    # If the auth file doesn't exist, create it by logging in.
    if not os.path.exists(auth_file):
        # Create a new page specifically for this setup task.
        page = browser.new_page()
        _perform_standard_user_login(page, auth_file)
        page.close()
    
    return auth_file

@pytest.fixture
def standard_user_page(browser: Browser, standard_user_auth_file: str) -> Page:
    """
    A fixture that provides a page pre-authenticated as the standard user.
    It depends on the 'standard_user_auth_file' fixture to ensure login has happened.
    """
    # The 'standard_user_auth_file' fixture has already run and returned the path.
    context = browser.new_context(
        storage_state=standard_user_auth_file
    )
    page = context.new_page()
    yield page
    context.close()

# (We will add fixtures for locked_out_user, etc. here later in the same pattern)

@pytest.fixture
def resettable_page(page: Page, request: APIRequestContext) -> Page:
    """A fixture that resets the state of app /a11 before the test."""
    reset_response = request.post('/api/a11/counter', data={'newCounter': 0})
    assert reset_response.ok()
    yield page