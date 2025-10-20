import pytest
from playwright.sync_api import Page, expect, Locator

class Locators:

    def __init__(self):
        self.result_box = None
        self.input_box = None
        self.reverse_button = None


# Define a fixture 
@pytest.fixture(scope="module")
def locators():
    return Locators()

@pytest.fixture(scope="function", autouse=True)
def setup_page(page: Page, locators: Locators):
    page.goto('/a01')
    locators.input_box = page.get_by_role("textbox", name="Input")
    locators.result_box = page.get_by_role("textbox", name="Result")
    locators.reverse_button = page.get_by_role("button", name='REVERSE!')
    
    yield setup_page

# use the fixture
def test_reversal_of_input(setup_page : Page, locators: Locators):
    locators.input_box.fill("abc")
    locators.reverse_button.click()
    expect(locators.result_box).to_have_value('cba')