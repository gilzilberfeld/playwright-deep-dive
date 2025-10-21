# python_tests/demos/d106/test_api.py
from playwright.sync_api import Page

# The test now asks for the standard 'page' fixture
def test_should_be_able_to_get_and_increment_the_counter(page: Page):
    # We use the page's built-in request context, which is already
    # configured with the base_url from pyproject.toml.
    api_request_context = page.request

    # --- The rest of your test logic remains the same ---

    # 1. Get the initial value.
    get_response = api_request_context.get('/api/a11/counter')
    assert get_response.ok
    initial_data = get_response.json()
    initial_count = initial_data['count']
    print(f"Initial count: {initial_count}")

    # 2. Increment the value.
    post_response = api_request_context.post('/api/a11/counter')
    assert post_response.ok
    incremented_data = post_response.json()
    assert incremented_data['count'] == initial_count + 1

    # 3. Get the value again to confirm the change persisted.
    final_get_response = api_request_context.get('/api/a11/counter')
    assert final_get_response.ok
    final_data = final_get_response.json()
    assert final_data['count'] == initial_count + 1