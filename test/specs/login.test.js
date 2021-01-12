const expect = require("chai").expect;
const {
  pressLogin,
  login,
  getEmailText,
} = require("../../services/auth.services");
/*
describe("login page", () => {
  // Execute a block of code before every test
  beforeEach(() => {
    pressLogin();
  });

  it("Verify that the text entry login page username & password fields are editable", () => {
    login("Actual User", "Test Pass");
    let text = getEmailText();
    console.log(text);
    expect(text).equal("Actual User");
  });

  it("Verify that empty username & empty password should raise an error", () => {
    login("", "");
    // let text = getEmailText();
    // console.log(text);
    // expect(text).equal("Actual User");
  });
});
*/
