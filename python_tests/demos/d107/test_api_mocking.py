from playwright.sync_api import Page, expect, Route

def test_should_display_an_error_message_when_the_api_fails(page: Page):
    # We use page.route() to intercept network requests.
    # The first argument is a glob pattern for the URL to intercept.
    def handle_route(route: Route):
        # Inside the handler, we can choose how to respond to the request.
        # route.fulfill() allows us to send a completely mocked response.
        # Here, we simulate a server error.
        print('Intercepted API call and mocking a 500 error.')
        route.fulfill(
            status=500,
            json={'error': 'Internal Server Error'}
        )
    
    page.route('/api/a11/counter', handle_route)

    # Now, we navigate to the page. The app's initial GET request
    # will be caught and handled by our mock.
    page.goto('/a11')

    # We can now assert that the UI correctly handled the error state.
    error_message = page.get_by_text('Failed to load counter')
    expect(error_message).to_be_visible()
