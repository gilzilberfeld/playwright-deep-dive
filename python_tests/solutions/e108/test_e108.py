import pytest
from playwright.sync_api import Page, expect, APIRequestContext

# This fixture is marked with autouse=True, so it will automatically run
# before every test in this file, just like a beforeEach hook.
@pytest.fixture(autouse=True)
def reset_counter_before_each(page: Page):
    """Resets the counter via API before each test."""
    reset_response = page.request.post('/api/a11/counter', data={'newCounter': 0})
    assert reset_response.ok

def test_should_display_a_count_of_0_on_first_load_after_reset(page: Page):
    # THE FIX: We add `wait_until='networkidle'`.
    # This guarantees the app's initial GET request has completed
    # before we move on to the assertion.
    page.goto('/a11', wait_until='networkidle')
    expect(page.get_by_test_id('counter-value')).to_contain_text('0')

def test_should_increment_to_1_after_reset(page: Page):
    page.goto('/a11', wait_until='networkidle')
    page.get_by_role('button', name='Increment').click()
    expect(page.get_by_test_id('counter-value')).to_contain_text('1')