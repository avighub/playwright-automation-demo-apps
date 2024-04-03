import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Auth Check", () => {
  test("should be able to login with valid credentials", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    const email = "user1@example.com";
    await page.locator('input[name="email"]').type(email);
    await page.locator('input[name="password"]').type("password1");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("id=welcomeMessage")).toHaveText(
      `Welcome ${email}`
    );
    await expect(page.getByRole("link", { name: "Logout" })).toBeVisible();
  });

  test("should display validation error for invalid credentials", async ({
    page,
  }) => {
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    const email = "user1@example.com";
    await page.locator('input[name="email"]').type(email);
    await page.locator('input[name="password"]').type("invalidpassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("id=message")).toHaveText("Invalid Credentials");
  });
});
