# **Playwright Deep Dive Workshop \- Python Track**

Welcome\! This directory contains all the materials for the **Python track** of the "Playwright Deep Dive" workshop.

The test application itself is in the parent directory. This folder contains only the Python tests (pytest), fixtures, and configuration.

## **⚙️ Python-Specific Setup**

Before you begin, make sure you have **Python 3.8+** installed on your system.

1. Navigate to this Directory:  
   Open your terminal and make sure you are inside the python_tests folder.  
   cd path/to/playwright-deep-dive/python_tests

2. Create a Virtual Environment:  
   This is a critical step to isolate our project's dependencies.  
   python \-m venv .venv

3. Activate the Virtual Environment:  
   You must do this every time you open a new terminal to work on this project.

   - **Windows (PowerShell/CMD):**  
     .venv\\Scripts\\activate

   - **macOS / Linux (bash/zsh):**  
     source .venv/bin/activate

You will see (.venv) at the beginning of your terminal prompt.

4. Install Dependencies:  
   Install pytest, playwright, and all other required plugins.  
   pip install \-r requirements.txt

5. Install Playwright Browsers:  
   This command downloads the browser binaries (Chromium, Firefox, WebKit) that Playwright needs to run.  
   playwright install \--with-deps

You are now ready for the Python track\!

## **🚀 Running Python Tests**

All commands should be run from within the python_tests directory with your virtual environment active.

- **Run all tests:**  
  pytest

- **Run a specific file:**  
  pytest demos/d101_demo.py

- **Run tests in headed (UI) mode:**  
  pytest \--headed

- Open the HTML Report:  
  The report is generated in the playwright-report folder in the root of the repository.  
  playwright show-report ../playwright-report
