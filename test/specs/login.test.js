import chai from "chai";
import { login, getEmailText } from "../../services/auth.services";
import { handleClickLoginButton } from "../../services/home.services";
import { validUser, invalidUser } from "../../fixtures/credentials";

const expect = chai.expect;

/*
describe("login page", () => {
  // Execute a block of code before every test
  beforeEach(() => {
    handleClickLoginButton();
  });

  // it("Verify that the text entry login page username & password fields are editable", () => {
  //   login("Actual User", "Test Pass");
  //   let text = getEmailText();
  //   console.log(text);
  //   expect(text).equal("Actual User");
  // });

  it("Verify that invalid username & invalid password should raise an error", () => {
    login(invalidUser);
  });

  it("Verify that valid username & valid password should login", () => {
    login(validUser);
    driver.pause(3000);
  });
});
// */
