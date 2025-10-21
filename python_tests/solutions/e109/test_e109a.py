from playwright.sync_api import Page, expect, Route

def test_should_display_the_no_products_found_message(page: Page):
    """
    This test mocks an API response to verify the UI's "empty state".
    """
    # Define the handler function that will provide the mock response.
    def handle_route(route: Route):
        """Fulfills the request with an empty list of products."""
        route.fulfill(
            status=200,
            json={"products": []}  # The mock response payload
        )

    # Use page.route() to intercept the GET request to the products API
    # and apply our handler function.
    page.route("/api/a21/products", handle_route)

    # Now, we navigate to the page. The app's initial GET request
    # will be caught and handled by our mock.
    page.goto("/a21")

    # We can now assert that the UI correctly rendered the "empty state" message.
    empty_message = page.get_by_text("No products found.")
    expect(empty_message).to_be_visible()