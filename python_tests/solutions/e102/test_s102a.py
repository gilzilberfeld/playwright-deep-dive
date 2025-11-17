from playwright.sync_api import Page, expect

def test_the_cat_card_should_be_visually_correct_ignoring_the_image(page: Page, assert_snapshot):
    page.goto("/a16")

    # First, we locate the entire component we want to snapshot.
    product_card = page.locator("div.MuiCard-root")

    # Next, we locate the specific, dynamic part we want to ignore.
    header_input = page.get_by_role("img", name="featured cat")

    # Step 1: Take the screenshot manually, passing the 'mask' option here.
    screenshot_bytes = product_card.screenshot(mask=[header_input])

    # Step 2: Pass the resulting image bytes to the snapshot assertion.
    assert_snapshot(screenshot_bytes)