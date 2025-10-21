# To make this test work, pytest needs to discover the fixtures.
# Ensure that the `python_tests` directory is on the PYTHONPATH,
# or, more conventionally, move the contents of `python_tests/fixtures.py`
# into a `python_tests/conftest.py` file.

import pytest
from playwright.sync_api import Page, expect

# By using the 'standard_user_page' fixture, this test now clearly declares
# its dependency on being logged in as a standard user.
# A global setup is no longer needed for this test.
@pytest.mark.skip(reason="This test requires the auth setup to be run first.")
def test_should_be_able_to_access_a_protected_page(standard_user_page: Page):
    # We use the authenticated page provided by the fixture.
    page = standard_user_page

    # We can navigate directly to a protected page.
    page.goto('https://saucedemo.com/inventory.html')

    # And we can immediately assert that we are logged in.
    expect(page.locator('.inventory_list')).to_be_visible()
