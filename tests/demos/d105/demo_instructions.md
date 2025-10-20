# Show this in three states

## State 1: "Before" (No Auth)

This is the starting point for attendees. It's a simple config with one project that has no storageState.
Code: It's your current file, but with all the auth-related comments removed to look clean.
Demo: Run a test that requires login (e.g., e111). It will fail.

## State 2: "Intermediate" (Single-User Auth Demo - d105)

This is where you introduce storageState for the first time.
Code: You will modify "State 1" live (or have it prepared).
Add a setup project (like the one you have commented out).

Add dependencies: ['setup'] to the chromium project.
Add storageState: 'playwright/.auth/user.json' to the chromium project's use block.

Demo: First, run npx playwright test --project=setup to create the auth file. Then, run e111 again. It will now pass.

## State 3: "Final" (Multi-Role Config - e107)

This is the final, complex config required by the to-do list, which supports multiple user roles.

Code: This is the code I'll provide below. You will replace your entire config with this.

Demo: Explain that this new config has two setup projects (one for standard_user, one for locked_out_user) and three testing projects (one for "no auth", one for "standard", one for "locked out"). You can now run tests against a specific role, e.g., npx playwright test --project="Chromium - Standard User".
