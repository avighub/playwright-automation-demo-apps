import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Check for Successful login", () => {
  test("should be able to login with valid credentials", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    const email = "user1@example.com";
    await page.locator('input[name="email"]').type(email);
    await page.locator('input[name="password"]').type("password1");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.getByRole("heading", { name: `Welcome ${email}` })
    ).toBeVisible();
  });
});
