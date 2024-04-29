import { test, expect, type Page } from "@playwright/test";

test.describe("API:Auth Check", () => {
  test("should be able to login with valid credentials", async ({
    request,
  }) => {
    const login = await request.post(`/login`, {
      data: {
        email: "user1@example.com",
        password: "password1",
      },
    });
    const responseBody = await login.json();
    
    expect(login.ok()).toBeTruthy();
    expect(responseBody.message).toBe("Authenticated");
  });

  test("should display validation error for invalid credentials", async ({
    request,
  }) => {
    const login = await request.post(`/login`, {
      data: {
        email: "user11@example.com",
        password: "password1",
      },
    });
    const responseBody = await login.json();

    expect(login.status()).toBe(401);
    expect(responseBody.message).toBe("Invalid Credentials");
  });
});
