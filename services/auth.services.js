const home = require("../page-objects/home.page");
const auth = require("../page-objects/auth.page");

function pressLogin() {
  home.$loginButton.click();
}

function login(email, password) {
  auth.$email.setValue(email);
  auth.$password.setValue(password);
  auth.$loginButton.click();
}

function getEmailText() {
  return auth.$email.getText();
}

module.exports = { pressLogin, login, getEmailText };
