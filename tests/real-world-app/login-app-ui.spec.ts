import { test, expect, type Page } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  page.goto("http://localhost:3000/signin");
  expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});

test.describe("WEB UI:Auth Check", { tag: "@login" }, () => {
  test("should be able to login with valid credentials", async ({ page }) => {
    await expect(
      page
        .getByRole("main")
        .locator("div")
        .filter({
          hasText:
            "Sign inUsernameUsernamePasswordPasswordRemember meSign InDon't have an account",
        })
        .getByRole("img")
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

    await page.getByLabel("Password").click();
    await expect(page.getByText("Username is required")).toBeVisible();

    await page.getByLabel("Username").fill("Heath93");

    await page.getByLabel("Password").fill("s3cret");

    await expect(page.getByLabel("Remember me")).toBeVisible();
    
    await expect(page.locator('[data-test="signup"]')).toBeVisible();

    await page.locator('[data-test="signin-submit"]').click();
  });


});
