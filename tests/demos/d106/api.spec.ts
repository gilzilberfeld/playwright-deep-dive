import { test, expect } from '@playwright/test';

test.describe('D106: Pure API Testing', async () => {
  test('should be able to get and increment the counter', async ({
  request,
}) => {
  // We can use the 'request' fixture to make API calls directly.
  // This is much faster than interacting with a browser.

  // 1. Get the initial value.
  const getResponse = await request.get('/api/a11/counter');
  expect(getResponse.ok()).toBeTruthy();
  const initialData = await getResponse.json();
  const initialCount = initialData.count;
  console.log(`Initial count: ${initialCount}`);

  // 2. Increment the value.
  const postResponse = await request.post('/api/a11/counter');
  expect(postResponse.ok()).toBeTruthy();
  const incrementedData = await postResponse.json();
  expect(incrementedData.count).toBe(initialCount + 1); 

  // 3. Get the value again to confirm the change persisted.
  const finalGetResponse = await request.get('/api/a11/counter');
  expect(finalGetResponse.ok()).toBeTruthy();
  const finalData = await finalGetResponse.json();
  expect(finalData.count).toBe(initialCount + 1); 
});
});
