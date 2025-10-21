from playwright.sync_api import Page, expect

def test_the_product_card_should_be_visually_correct_ignoring_the_description(page: Page, assert_snapshot):
    page.goto("/a16")

    # First, we locate the entire component we want to snapshot.
    product_card = page.locator("div.MuiCard-root")

    # Next, we locate the specific, dynamic part we want to ignore.
    description_input = page.get_by_label("Cat Description")

    # Step 1: Take the screenshot manually, passing the 'mask' option here.
    screenshot_bytes = product_card.screenshot(mask=[description_input])

    # Step 2: Pass the resulting image bytes to the snapshot assertion.
    assert_snapshot(screenshot_bytes)