"""
Refer to the "Demos and Exercises Guide" for the task details
for exercise E104c.
"""

from playwright.sync_api import Page, expect

def test_should_verify_the_success_message_appears_and_then_disappears(page: Page):
    page.goto('/a22')

    page.get_by_role('button', name='Show Success Message').click()
    success_alert = page.get_by_role('alert')
    expect(success_alert).to_be_visible()

    expect(success_alert).not_to_be_visible(timeout=3000)
