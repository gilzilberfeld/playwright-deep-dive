# To make this test work, pytest needs to discover the fixtures.
# Ensure that the `python_tests` directory is on the PYTHONPATH,
# or, more conventionally, move the contents of `python_tests/fixtures.py`
# into a `python_tests/conftest.py` file.

from playwright.sync_api import Page, expect

# This test uses the 'resettable_page' fixture.
# The test code itself is now incredibly clean. It doesn't need a setup/teardown hook
# because the fixture handles the API call to reset the state automatically.
def test_should_display_a_count_of_0_on_first_load(resettable_page: Page):
    page = resettable_page
    page.goto('/a11', wait_until='networkidle')
    expect(page.get_by_test_id('counter-value')).to_contain_text('0')
