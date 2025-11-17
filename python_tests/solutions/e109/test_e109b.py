# python_tests/solutions/s109b_solution.py
import threading

from playwright.sync_api import Page, expect, Route

def test_should_display_the_loading_spinner_while_waiting_for_the_api(page: Page):
    """
    This test mocks a slow network by intercepting an API call and pausing it
    manually to verify that a loading spinner is visible.
    """

    # In Python, a threading.Event is a direct equivalent
    # to a manually controlled Promise.
    resume_event = threading.Event()

    def handle_route(route: Route):
        print("Intercepted API call, pausing...")

        # This blocks the network handler thread until resume_event.set() is called
        resume_event.wait()

        print("Resuming API call...")
        # Once un-paused, continue the original network request.
        route.continue_()

    # Intercept the API call and apply our handler.
    page.route('/a14/page2', handle_route)

    # We start the navigation. The browser will be "stuck" in a loading state
    # because the API call we intercepted is blocked in its own thread.
    page.goto('/a14')
    page.get_by_role('button', name='Go To Page 2').click()

    # At this exact moment, the API call is paused. This gives us a perfect,
    # stable window to assert that the loading spinner is visible.
    expect(page.get_by_role('progressbar')).to_be_visible()

    # Now, we set the event, which "un-pauses" the handler thread.
    resume_event.set()

    # Finally, we can assert that the page has finished loading and the
    # spinner has disappeared. Playwright's auto-wait handles this.
    expect(page.get_by_role('progressbar')).not_to_be_visible()
    expect(page.get_by_text('You Have Arrived')).to_be_visible()