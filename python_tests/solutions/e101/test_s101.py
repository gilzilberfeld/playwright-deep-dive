from playwright.sync_api import Page, expect
import re

def test_should_navigate_through_a_multi_page_flow_and_back(page: Page):
    page.goto("/a07")

    # 1. Navigate from the main page through to Page 3.
    page.get_by_role("button", name="Go to Page 2").click()
    page.get_by_role("button", name="Go to Page 3").click()

    # 2. On Page 3, assert the heading is correct.
    expect(page).to_have_url(re.compile(r".*a07/page3"))
    expect(page.get_by_role("heading", name="App 7 - Navigation: Page 3")).to_be_visible()

    # 3. Navigate back to the main page using the browser's back functionality.
    page.go_back()
    page.go_back()

    # 4. Assert you have successfully returned to the main page.
    expect(page).to_have_url(re.compile(r".*a07"))
    expect(page.get_by_role("heading", name="App 7 - Navigation: Page 1")).to_be_visible()
