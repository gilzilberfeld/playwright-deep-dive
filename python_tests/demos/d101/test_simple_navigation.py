import re
from playwright.sync_api import Page, expect

def test_should_navigate_to_page_2_and_back(page: Page):
    page.goto('/a07')

    # Navigate to Page 2 using the 'button' role
    page.get_by_role('button', name='Go to Page 2').click()
    expect(page).to_have_url(re.compile(r".*a07/page2"))
    expect(page.get_by_role('heading', name='App 7 - Navigation: Page 2')).to_be_visible()

    # Navigate back
    page.go_back()
    expect(page).to_have_url(re.compile(r".*a07"))
    # Assert the heading on the main page is correct
    expect(page.get_by_role('heading', name='App 7 - Navigation: Page 1')).to_be_visible()
