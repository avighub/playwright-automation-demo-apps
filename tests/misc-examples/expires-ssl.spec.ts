import test, { expect } from "@playwright/test";

const baseUrl = "https://expired.badssl.com/";

test("should show ssl error without bypassing", async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page.getByRole("heading")).toContainText("badssl.com");
});

test("should bypass ssl error with playwright config", async ({ page }) => {
  //   const context = browser.newContext({ ignoreHTTPSErrors: true });
  //   const page = context.newPage();
  await page.goto(baseUrl);
  await expect(page.getByRole("heading")).toContainText("badssl.com");
});
