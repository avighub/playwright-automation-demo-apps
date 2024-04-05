#### Practice project with Playwright

- Installation
  - Install Playwright: ```npm init playwright@latest```
  - Choose the interactive options
  - Install browsers: ```npx playwright install```
- How to Run
  - Navigate to the tests directory where all ```*spec.ts``` files are present 
  - To Run tests from specific file: ```npx playwright test tests/sample-login-tests/sample-login-app.spec.ts```
  - To Run all tests in command line: ```npx playwright test```
  - To open the interactive UI mode. Mode : ```npx playwright test --ui```
  - To run the tests only on Desktop Chrome: ```npx playwright test --project=chromium```
  - To run the tests in a specific file (Uses Regex to detect file name): ```npx playwright test example```
  - To run the tests in debug mode: ```npx playwright test --debug```
