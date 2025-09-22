# Instructions on how to setup multi-role setups

````js
// This is the correct configuration for the multi-role authentication exercise (e110).
// It defines separate projects for each user type.

/*
  projects: [
    // --------------- SETUP PROJECTS ----------------
    // These run first to create the auth files.
    {
      name: 'setup-standard',
      testMatch: /standard\.setup\.ts/,
    },
    {
      name: 'setup-lockout',
      testMatch: /lockout\.setup\.ts/,
    },


    // --------------- TEST PROJECTS -----------------
    // These projects run the actual tests and depend on the setup projects.
    {
      name: 'Standard User',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/standard_user.json',
      },
      dependencies: ['setup-standard'],
    },
    {
      name: 'Locked Out User',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/locked_out_user.json',
      },
      dependencies: ['setup-lockout'],
    },
  ],
*/
```js

### How to Run the Tests Now

With this new configuration, you can no longer just run `npx playwright test`. You must now tell Playwright *which project* (i.e., which user role) you want to test against.

You do this with the `--project` flag:

```bash
# To run tests as the standard user
npx playwright test --project="Standard User"

# To run tests as the problem user
npx playwright test --project="Problem User"

````
