from playwright.sync_api import Page, Browser,  expect

# The test now accepts 'standard_user_page' instead of the default 'page'
def test_should_be_able_to_access_a_protected_page( standard_user_page  :Page):
    # The 'standardUserPage' fixture handles loading the auth state.
    standard_user_page.goto('https://www.saucedemo.com/inventory.html')

    # The rest of the assertions are the same.
    expect(standard_user_page.locator('.inventory_list')).to_be_visible()
    expect(standard_user_page.locator('#shopping_cart_container')).to_be_visible()