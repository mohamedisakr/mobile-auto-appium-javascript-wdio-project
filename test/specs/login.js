const expect = require("chai").expect;
const authServices = require("../../services/auth.services");
// const home = require("../../page-objects/home.page");
// const auth = require("../../page-objects/auth.page");

describe("login page", () => {
  // Execute a block of code before every test
  beforeEach(() => {
    authServices.pressLogin();
  });

  it("Verify that the text entry login page username & password fields are editable", () => {
    authServices.login("Actual User", "Test Pass");
    let text = authServices.getEmailText();
    console.log(text);
    expect(text).equal("Actual User");
  });
});
