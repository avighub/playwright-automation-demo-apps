import test, { expect } from "@playwright/test";
import Factory from "../../data-factory/user-factory-definition";
import UserFactoryUnregistered from "../../data-factory/user-factory-unregistered";

test("Should provide test data using factory definition", async () => {
  const user = Factory.build("user", { firstName: "Ravi" });
  user.firstName = "Mohan";
  console.log(user);
  expect(user.firstName).toEqual("Mohan");
});

test("Should provide test data using unregistered factory", async () => {
  const user = UserFactoryUnregistered.build();
  console.log(user);
  expect(user.firstName).toEqual("Avishek");
});
