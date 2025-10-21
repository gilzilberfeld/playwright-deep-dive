# **Playwright Deep Dive Workshop (Agile Testing Days)**

Welcome\! This repository contains all the materials for the 6-hour "Playwright Deep Dive" workshop. You will find a Next.js test application, along with demos, exercises, and solutions for the **TypeScript track**.

For the Python track, please see the dedicated README inside the python\_tests directory.

## **⚙️ Setup Instructions**

To ensure a smooth workshop experience, we offer four setup plans. **Plan A (Gitpod)** is strongly recommended for a zero-install, pre-configured environment.

### **Plan A: Gitpod Cloud IDE (Recommended)**

This is the fastest and most reliable way to get started. Everything is pre-configured in the cloud.

1. **Prerequisites:** A GitHub account.  
2. **Launch:** Simply click this link to launch the environment:  
   * [**Launch Gitpod Workspace**](https://www.google.com/search?q=https://gitpod.io/%23/https://github.com/gilzilberfeld/playwright-deep-dive)  
3. **Login:** You may be asked to log in with your GitHub account. Follow the updated instructions: go to https://app.gitpod.io, log in, and then open the repository from a URL.  
4. **Wait:** Be patient. The environment will automatically install all dependencies, install Playwright's browsers, and start the application. A browser tab with the running application will open automatically.

You are now ready for the workshop\!

### **Plan B: Local Code \+ Deployed App (Light Local)**

This option is great if you prefer to use your own local code editor but don't want to run the application server locally.

1. **Prerequisites:** git and node (v18+) installed.  
2. **Clone the repo:**  
   git clone \[https://github.com/gilzilberfeld/playwright-deep-dive.git\](https://github.com/gilzilberfeld/playwright-deep-dive.git)  
   cd playwright-deep-dive

3. **Install dependencies:**  
   npm install  
   npx playwright install \--with-deps

4. **Configure playwright.config.ts:**  
   * Open playwright.config.ts.  
   * Change the baseURL to the public URL of our deployed application:  
     // baseURL: '\[http://127.0.0.1:3000\](http://127.0.0.1:3000)',  
     baseURL: '\[https://playwright-deep-dive.vercel.app/\](https://playwright-deep-dive.vercel.app/)',

   * Comment out the webServer block at the bottom of the file, as we won't be starting a local server.

### **Plan C: Full Local Setup**

This is the traditional setup for developers who want to run everything on their local machine.

1. **Prerequisites:** git and node (v18+) installed.  
2. **Clone and install:** Follow steps 2 and 3 from Plan B.  
3. **Run the application:** In one terminal, start the Next.js development server:  
   npm run dev

4. **Run the tests:** In a *second* terminal, you can now run the Playwright tests. The playwright.config.ts is already configured to use the local server.  
   npx playwright test

### **Plan D: Offline Fallback (Emergency Use)**

This plan is for the unlikely event that the conference Wi-Fi fails completely.

1. **Prerequisites:** A pre-downloaded copy of this repository.  
2. **Download Static App:** Download the playwright-deep-dive-app.zip artifact (link to be provided at the workshop). Unzip it.  
3. **Configure playwright.config.ts:**  
   * Change the baseURL to point to the local index.html file from the unzipped folder.  
   * Comment out the webServer block.  
   * **Note:** API-dependent exercises will not work in this mode.

## **🚀 Running TypeScript Tests**

* **Run all tests:**  
  npx playwright test

* **Run a specific file:**  
  npx playwright test tests/demos/d101.demo.spec.ts

* **Run in headed mode:**  
  npx playwright test \--headed

* **Open the HTML Report:**  
  npx playwright show-report  
