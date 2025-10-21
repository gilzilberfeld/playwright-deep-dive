# python_tests/solutions/s104b_solution.py
from playwright.sync_api import Page, expect

def test_should_enable_the_button_after_checking_the_box(page: Page):
    page.goto('/a18')

    submit_button = page.get_by_role('button', name='Submit')
    terms_checkbox = page.get_by_label('I agree to the terms and conditions')

    terms_checkbox.check()
    expect(submit_button).to_be_enabled()

    submit_button.click()