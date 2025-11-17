# python_tests/solutions/s104c_solution.py
from playwright.sync_api import Page, expect

def test_should_verify_the_success_message_appears(page: Page):
    page.goto('/a22')

    # The action that triggers the fleeting element.
    page.get_by_role('button', name='Show Success Message').click()

    success_alert = page.get_by_role('alert').filter(
        has_text='Action was successful!'
    )
    expect(success_alert).to_be_visible()

    # Bonus assertion: We can also assert that the element eventually disappears.
    # This confirms the full lifecycle of the toast component.
    expect(success_alert).not_to_be_visible(timeout=3000)