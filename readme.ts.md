# Playwright Deep Dive Workshop (Agile Testing Days)

Welcome! This repository contains all the materials for the 6-hour "Playwright Deep Dive" workshop. You will find a Next.js test application, along with demos, exercises, and solutions for the TypeScript track.

For the Python track, please see the dedicated README inside the python_tests directory.

⚙️ Setup Options

To ensure a smooth workshop experience, we offer three setup plans. Plan A (Recommended) is the simplest, as it uses the already deployed application.

## Plan A: Local Code + Deployed App (Recommended)

This is the fastest and most reliable setup. You run your tests locally against a live, deployed version of the test application.
Prerequisites: git and node (v18+) installed.

Clone the repo:

```bash
git clone [https://github.com/gilzilberfeld/playwright-deep-dive.git](https://github.com/gilzilberfeld/playwright-deep-dive.git)
cd playwright-deep-dive
```

Install dependencies:

```bash
npm install
npx playwright install --with-deps
```

Configure playwright.config.ts:

Open playwright.config.ts.

Change the baseURL to the public URL of our deployed application:

```json
// baseURL: '[http://127.0.0.1:3000](http://127.0.0.1:3000)',
baseURL: '[https://playwright-deep-dive.vercel.app/](https://playwright-deep-dive.vercel.app/)',
```

Comment out the webServer block at the bottom of the file (we don't need to start a local server).

## Plan B: Full Local Setup

This is the traditional setup for developers who want to run everything on their local machine.

Prerequisites: git and node (v18+) installed.

Clone and install: Follow steps 2 and 3 from Plan A.

Run the application: In one terminal, start the Next.js development server:

```bash
npm run dev
```

Run the tests: In a second terminal, you can now run the Playwright tests. The playwright.config.ts is already configured to use the local server (http://127.0.0.1:3000).

```bash
npx playwright test
```

🚀 Running TypeScript Tests

Run all tests:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/demos/d101.demo.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open the HTML Report:

```bash
npx playwright show-report
```
