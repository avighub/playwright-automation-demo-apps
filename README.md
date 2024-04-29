#### Practice project with Playwright

- Installation
  - Install Playwright: ```npm init playwright@latest```
  - Choose the interactive options
  - Install browsers: ```npx playwright install```
  
- How to Run
  - To Run all tests (inside tests dir ): ```npx playwright test```
  - To Run tests from specific file: ```npx playwright test path-to-test-file.ts```
  - To open the interactive UI mode. Mode : ```npx playwright test --ui```
  - To run the tests only on Desktop Chrome: ```npx playwright test --project=chromium```
  - To run the tests in a specific file (Uses Regex to detect file name): ```npx playwright test example```
  - To run a test with a specific title : ```npx playwright test -g "add a todo item"```
  - To run the tests in debug mode: ```npx playwright test --debug```

- Update Playwright to latest version 
  - ```npm install -D @playwright/test@latest```