import { test, expect } from '@playwright/test';

test.describe('D111: Pure API Testing', () => {
  test('should be able to get and increment the counter', async ({
    request,
  }) => {
    // We can use the 'request' fixture to make API calls directly.
    // This is much faster than interacting with a browser.

    // 1. Get the initial value.
    const getResponse = await request.get('/api/a11/counter');
    expect(getResponse.ok()).toBeTruthy();
    const initialData = await getResponse.json();
    const initialCount = initialData.counter;
    console.log(`Initial count: ${initialCount}`);

    // 2. Increment the value.
    const postResponse = await request.post('/api/a11/counter', { data: JSON.stringify({}) });
    expect(postResponse.ok()).toBeTruthy();
    const incrementedData = await postResponse.json();
    expect(incrementedData.counter).toBe(initialCount + 1);

    // 3. Get the value again to confirm the change persisted.
    const finalGetResponse = await request.get('/api/a11/counter');
    expect(finalGetResponse.ok()).toBeTruthy();
    const finalData = await finalGetResponse.json();
    expect(finalData.counter).toBe(initialCount + 1);
  });
});
