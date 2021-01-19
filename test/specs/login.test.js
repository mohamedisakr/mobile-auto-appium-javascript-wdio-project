import chai from "chai";
import LoginServices from "../../services/login.services";
import navbarServices from "../../services/navbar.services";
import { validUser, invalidUser } from "../../fixtures/credentials";

const expect = chai.expect;

// /*
describe("login page", () => {
  // // Execute a block of code before every test
  beforeEach(() => {
    navbarServices.handleClickLoginButton();
  });

  it("Verify that valid username & valid password should login", () => {
    // navbarServices.handleClickLoginButton();
    const loginServices = new LoginServices(validUser);
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
