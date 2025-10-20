# Instructions on how to setup multi-role setups

This is the correct configuration for the multi-role authentication exercise (e110).
It defines separate projects for each user type.
Copy it to playwright.config.ts, comment out the regular DEFAULT (NO AUTH) parts
And uncomment the following:

````javascript
    /* ================================================================== */
    /* == S107 : MULTI-ROLE AUTH (e107) == */
    /* To demo, comment out DEMO STEP 2 and uncomment this block. */
    /* ================================================================== */

    /* == SETUP PROJECTS == */
    // {
    //   name: 'Setup - Standard User',
    //   // This is now specific
    //   testMatch: /auth\.standard\.setup\.ts/,
    // },
    // {
    //   name: 'Setup - Locked Out User',
    //   // This is now specific
    //   testMatch: /auth\.locked\.setup\.ts/,
    // },

    // /* == TEST PROJECTS == */
    // {
    //   name: 'Chromium - No Auth',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    // },
    // {
    //   name: 'Chromium - Standard User',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/standard_user.json',
    //   },
    //   dependencies: ['Setup - Standard User'],
    // },
    // {
    //   name: 'Chromium - Locked Out User',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/locked_out_user.json',
    //   },
    //   dependencies: ['Setup - Locked Out User'],
    // },
```javascript

### How to Run the Tests Now

Copy the auth.locked.setup.ts to the root directory.

With this new configuration, you can no longer just run `npx playwright test`. You must now tell Playwright *which project* (i.e., which user role) you want to test against.

You do this with the `--project` flag:

```bash
# To run tests as the standard user
npx playwright test --project="Chromium - Standard User"

# To run tests as the locked out user
npx playwright test --project="Chromium - Locked Out User"

````
