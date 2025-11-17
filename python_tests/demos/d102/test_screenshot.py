from playwright.sync_api import Page, Locator

# Add 'assert_snapshot' as an argument to the test function signature.
# Pytest will see this and inject the fixture for you.
def test_the_product_should_match_the_baseline_screenshot_for_the_cat_card(page: Page, assert_snapshot):
    page.goto("/a16")

    cat_card: Locator = page.locator("div.MuiCard-root")

    # capture screenshot of the cat card in a buffer
    screenshot_bytes = cat_card.screenshot()

    # compare to baseline snapshot
    assert_snapshot(screenshot_bytes)


def test_the_product_card_should_be_visually_correct_ignoring_the_description(page: Page, assert_snapshot):
    page.goto("/a16")

    cat_card: Locator = page.locator("div.MuiCard-root")

    # Mask the specific locator DOM
    description_input: Locator = page.get_by_label("Cat Description")
    partial_screenshot_bytes = cat_card.screenshot(mask=[description_input])

    assert_snapshot(partial_screenshot_bytes)