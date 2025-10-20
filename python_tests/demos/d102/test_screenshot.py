# python_tests/demos/d102/test_screenshot.py
from playwright.sync_api import Page, Locator

def test_match_the_baseline_screenshot_for_the_product_card(page: Page, assert_snapshot):
    page.goto("/a15")
    product_card: Locator = page.locator("div.MuiCard-root")

    # STEP 1: Take the screenshot manually, getting the image bytes
    screenshot_bytes = product_card.screenshot()

    # STEP 2: Pass ONLY the bytes to assert_snapshot
    assert_snapshot(screenshot_bytes) # REMOVED the filename argument

def test_match_the_baseline_while_ignoring_dynamic_content(page: Page, assert_snapshot):
    page.goto("/a16")
    product_card: Locator = page.locator("div.MuiCard-root")
    product_image: Locator = product_card.locator(".MuiCardMedia-root")

    # STEP 1: Take the screenshot manually, passing mask options here
    screenshot_bytes = product_card.screenshot(mask=[product_image])

    # STEP 2: Pass ONLY the bytes to assert_snapshot
    assert_snapshot(screenshot_bytes) # REMOVED the filename argument