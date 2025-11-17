# Playwright Deep Dive Workshop - Python Track

Welcome! The "python_tests" directory contains all the materials for the Python track of the "Playwright Deep Dive" workshop.

The test application itself is in the parent directory. This folder contains only the Python tests (pytest), fixtures, and configuration.

⚙️ Python-Specific Setup

Before you begin, make sure you have Python 3.8+ installed on your system.

Navigate to this Directory:
Open your terminal and make sure you are inside the python_tests folder.

```bash
cd path/to/playwright-deep-dive/python_tests
```

Create a Virtual Environment:
This is a critical step to isolate our project's dependencies.

```bash
python -m venv .venv
```

Activate the Virtual Environment:
You must do this every time you open a new terminal to work on this project.

Windows (PowerShell/CMD):

```bash
.venv\Scripts\activate
```

macOS / Linux (bash/zsh):

```bash
source .venv/bin/activate
```

You will see (.venv) at the beginning of your terminal prompt.

Install Dependencies:
Install pytest, playwright, and all other required plugins.

```bash
pip install -r requirements.txt
```


Install Playwright Browsers:
This command downloads the browser binaries (Chromium, Firefox, WebKit) that Playwright needs to run.

```bash
playwright install --with-deps
```


🎯 Connecting to the Test Application

Your Python tests run against the same Next.js application. You have two options to get it running:

## Plan A (Recommended): Use the deployed app.

Follow Plan A from the readme.ts.md file in the root folder.

Open your python_tests/pyproject.toml file.

Change the base_url to the Vercel app:

base_url = "[https://playwright-deep-dive.vercel.app/](https://playwright-deep-dive.vercel.app/)"

## Plan B (Full Local): Run the app server locally.

Follow Plan B from the readme.ts.md file.

Your python_tests/pyproject.toml is already configured for this. The default base_url = "http://127.0.0.1:3000" will work.

🚀 Running Python Tests

All commands should be run from within the python_tests directory with your virtual environment active.

Run all tests:

```bash
pytest
```

Run a specific file:

```bash
pytest demos/d101_demo.py
```

Run tests in headed (UI) mode:

```bash
pytest --headed
```

Update Visual Snapshots:

```bash
pytest <path_to_test> --update-snapshots
```

Open the HTML Report:
The report is generated in the playwright-report folder in the root of the repository.

```bash
playwright show-report ../playwright-report
```
