from playwright.sync_api import Page, expect

def test_should_update_backend_state_after_ui_action(page: Page):
    page.goto('/a11')

    # Wait for the initial count to load to get a baseline.
    expect(page.get_by_role('button', name='Increment')).to_be_enabled()
    initial_text = page.get_by_test_id('counter-value').inner_text()
    initial_count = int(initial_text)

    # 1. Perform an action on the UI.
    page.get_by_role('button', name='Increment').click()

    # 2. Instead of waiting for the UI to update, we go straight to the source.
    #    We use the page's request context to query the API directly.
    #    This is faster and more reliable than waiting for a UI element to change.
    response = page.request.get('/api/a11/counter')
    assert response.ok
    data = response.json()

    # 3. Assert that the backend state is correct.
    assert data['count'] == initial_count + 1
