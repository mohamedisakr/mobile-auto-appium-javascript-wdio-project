import chai from "chai";
import LoginServices from "../../services/login.services";
import navbarServices from "../../services/navbar.services";
import { validUser, invalidUser } from "../../fixtures/credentials";
const allureReporter = require("@wdio/allure-reporter").default;

const expect = chai.expect;

// /*
describe("login page", () => {
  // // Execute a block of code before every test
  beforeEach(() => {
    navbarServices.handleClickLoginButton();
  });

  it("Verify that valid username & valid password should login", () => {
    // navbarServices.handleClickLoginButton();
    allureReporter.addStep(`Add user email ${validUser.email}`);
    allureReporter.addStep(`Add user password ${validUser.password}`);
    const loginServices = new LoginServices(validUser);
    allureReporter.addStep("Click on login button");
    allureReporter.addStep("Verify login successfully with valid credentials");
    loginServices.login().verifyLoginSuccessfully();
  });

  // // TODO: Postpone this test # 26
  // it("Verify that invalid username & invalid password should raise an error", () => {
  //   // navbarServices.handleClickLoginButton();
  //   const loginServices = new LoginServices(invalidUser);
  //   loginServices.login().verifyLoginUnSuccessfully();
  // });
});
// */
