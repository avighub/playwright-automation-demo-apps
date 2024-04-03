import { test, expect, chromium } from "@playwright/test";
function generateRandomString(length: number): string {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

test.describe("Parallel Test", () => {
  let browser;
  let facilityId;

  test.beforeAll(async () => {
    console.log("=== Opening Browser == ");
    browser = await chromium.launch();
  });
  test.afterAll(async () => {
    console.log("=== Closing Browser == ");
    await browser.close();
  });
  test.beforeEach(async () => {
    console.log("=== Opening Page == ");
    facilityId = generateRandomString(10); // Generates a random string of length 10
    console.log(`Created facility ${facilityId} `);
  });

  test("First test", () => {
    console.log("First test");
  });

  test("Second test", () => {
    console.log("Second test");
  });

  test("Third test", () => {
    console.log("Third test");
  });

  test("Fourth test", () => {
    console.log("Fourth test");
  });
});
