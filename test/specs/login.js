const expect = require("chai").expect;
const home = require("../../page-objects/home.page");
const auth = require("../../page-objects/auth.page");

describe("login page", () => {
  // Execute a block of code before every test
  beforeEach(() => {});

  it("Verify that the text entry login page username & password fields are editable", () => {
    home.$loginButton.click();
    auth.login("Actual User", "Test Pass");
    let text = auth.$email.getText();
    console.log(text);
    expect(text).equal("Actual User");
  });
});
