# python_tests/solutions/s109b_solution.py
from playwright.sync_api import Page, expect

def test_should_display_the_loading_spinner_and_then_the_final_content(page: Page):
    """
    This test leverages the app's natural network delay to verify the loading state.
    """
    page.goto('/a14')

    # IMPORTANT: We click the button but do NOT await the navigation here.
    # The click action initiates the navigation and the slow network request,
    # but the test execution continues immediately.
    page.get_by_role('button', name='Go To Page 2').click()

    # Immediately after the click, the page is in a loading state.
    # We can now assert that the loading spinner is visible.
    expect(page.get_by_role('progressbar')).to_be_visible()

    # Now, we assert that the spinner eventually disappears.
    # Playwright's auto-waiting will handle the delay. It will keep checking
    # until the network request finishes, the page updates, and the spinner is gone.
    expect(page.get_by_role('progressbar')).not_to_be_visible()

    # Finally, we can assert that the final content has appeared.
    expect(page.get_by_text('You Have Arrived')).to_be_visible()