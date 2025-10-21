# python_tests/solutions/s102b_solution.py
from playwright.sync_api import Page, Locator

def test_button_should_change_appearance_on_hover(page: Page, assert_snapshot):
    """
    This test verifies the visual state of a button during a hover interaction.
    """
    page.goto("/a15")

    # Locate the button we want to test
    learn_more_button: Locator = page.get_by_role("button", name="Learn More")

    # Use the .hover() action to trigger the CSS :hover state
    learn_more_button.hover()

    # Step 1: Take a screenshot of just the button locator to get the image bytes.
    # Because we called .hover() right before this, the screenshot will capture
    # the button in its hovered state.
    screenshot_bytes = learn_more_button.screenshot()

    # Step 2: Pass the bytes to the snapshot assertion.
    # The plugin will generate a filename based on the test name.
    assert_snapshot(screenshot_bytes)