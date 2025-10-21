from playwright.sync_api import Page, Locator

# Add 'assert_snapshot' as an argument to the test function signature.
# Pytest will see this and inject the fixture for you.
def test_the_product_card_should_be_visually_correct_ignoring_the_description(page: Page, assert_snapshot):
    page.goto("/a16")

    product_card: Locator = page.locator("div.MuiCard-root")
    description_input: Locator = page.get_by_label("Cat Description")

    screenshot_bytes = product_card.screenshot(mask=[description_input])

    # Now that the fixture is injected, this call will work.
    # Re-adding the filename is a good practice when passing bytes.
    assert_snapshot(screenshot_bytes)