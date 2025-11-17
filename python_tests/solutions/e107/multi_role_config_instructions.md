# Instructions on how to set up multi-role auth in Python

In the Python track, we don't use projects in a config file for authentication. Instead, we create powerful, reusable fixtures in our conftest.py file.To solve the multi-role authentication exercise (e107), you need to update python_tests/conftest.py to make it aware of the "locked out user".

## Step 1: Update conftest.py

Open your python_tests/conftest.py file and add the following code. This adds a helper function and two new fixtures for the locked-out user.
```python

# --- ADD THIS HELPER FUNCTION (near the other helper) ---
def _perform_locked_out_user_login(page: Page, auth_file_path: str):
    """Attempts login as locked_out_user and saves auth state."""
    page.goto('[https://www.saucedemo.com/](https://www.saucedemo.com/)')
    page.locator('[data-test="username"]').fill('locked_out_user')
    page.locator('[data-test="password"]').fill('secret_sauce')
    page.locator('[data-test="login-button"]').click()
    # Assert the error message appears to confirm the login attempt happened
    expect(page.locator('[data-test="error"]')).to_be_visible()
    page.context.storage_state(path=auth_file_path)


# --- ADD THESE FIXTURES (below the standard_user fixtures) ---

@pytest.fixture(scope="session")
def locked_out_user_auth_file(browser: Browser):
    """Ensures the auth file for the locked-out user exists."""
    auth_file = os.path.abspath(os.path.join(
        os.path.dirname(__file__),
        '../playwright/.auth/locked_out_user.json'
    ))
    if not os.path.exists(auth_file):
        page = browser.new_page()
        _perform_locked_out_user_login(page, auth_file)
        page.close()
    return auth_file

@pytest.fixture
def locked_out_user_page(browser: Browser, locked_out_user_auth_file: str) -> Page:
    """Provides a page pre-authenticated as the locked-out user."""
    context = browser.new_context(storage_state=locked_out_user_auth_file)
    page = context.new_page()
    yield page
    context.close()
```


## Step 2: Write Your Test

Now, your test file (e.g., test_e107.py) can simply "ask" for the standard_user_page or locked_out_user_page fixture, and pytest will automatically provide the correct, pre-authenticated page.

Your task is to create two tests:One that uses standard_user_page and asserts that the inventory is visible.One that uses locked_out_user_page and asserts that the user sees the correct error message.How to Run the Tests NowBecause the fixtures automatically handle setup (including creating the .json auth files if they are missing), you don't need any special flags.Just run pytest on your exercise file. It should run both tests and pass.# Delete the old .json files to prove it works (optional)

 rm playwright/.auth/*.json

## Step 3: Run the tests
```bash
pytest solutions/test_e107.py
```
