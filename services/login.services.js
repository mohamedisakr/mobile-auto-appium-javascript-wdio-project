import loginPage from "../page-objects/login.page";

class LoginServices {
  login(user) {
    const { email, password } = user;
    loginPage.$email.setValue(email);
    loginPage.$password.setValue(password);
    loginPage.$loginButton.click();
  }

  getEmailText() {
    return loginPage.$email.getValue();
  }
}

export default new LoginServices();
