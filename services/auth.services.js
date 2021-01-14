const auth = require("../page-objects/auth.page");

function login(user) {
  const { email, password } = user;
  auth.$email.setValue(email);
  auth.$password.setValue(password);
  auth.$loginButton.click();
}

function getEmailText() {
  return auth.$email.getValue();
}

export { login, getEmailText };
