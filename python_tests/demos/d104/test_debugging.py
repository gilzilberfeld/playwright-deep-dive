from playwright.sync_api import Page, expect

def test_part_1_the_grand_tour(page: Page):
    """
    This is a simple, passing test we can use to explore the tools.
    1. Run with `pytest --headed` to launch the Inspector.
       - Step through, explore locators.
    2. Run with `pytest --tracing on` to generate a trace.
       - Open `trace.zip` and give a tour of the UI.
    """
    page.goto("/a07")
    page.get_by_role("button", name="Go to Page 2").click()
    expect(page.get_by_role("heading", name="App 7 - Navigation: Page 2")).to_be_visible()

def test_part_2_debugging_a_missing_attribute(page: Page):
    """
    This test is designed to fail to show how the Trace Viewer helps.
    INSTRUCTIONS FOR FACILITATOR:
    1. Run this test once as-is to show it passing.
    2. Go into `app/a19/page.tsx` and REMOVE the `data-testid="submit-button"` from the Button.
    3. Re-run the test. It will now fail with a timeout.
    4. Open the `trace.zip` and show the red, failing action and the log.
    """
    page.goto("/a19")
    page.get_by_label("Your Name").fill("Gil")
    page.get_by_test_id("submit-button").click()
    expect(page.get_by_text("Hello, Gil!")).to_be_visible()
