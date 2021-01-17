import loginPage from "../page-objects/login.page";
import loginMessagePopup from "../page-objects/login.message.popup.page";

class LoginServices {
  constructor(user) {
    const { email, password } = user;
    this.email = email;
    this.password = password;
  }

  login() {
    loginPage.$email.setValue(this.email);
    loginPage.$password.setValue(this.password);
    loginPage.$loginButton.click();
    return this;
  }

  verifyLoginSuccessfully() {
    const expectedMessageTitle = "Success";
    const expectedMessageContent = "You are logged in!";
    expect(loginMessagePopup.$messageTitle).toHaveText(expectedMessageTitle);
    expect(loginMessagePopup.$messageContent).toHaveText(
      expectedMessageContent
    );
    loginMessagePopup.$okButton.click();
  }

  verifyLoginUnSuccessfully() {
    if (!this.email && this.password.length >= 8) {
      expect(loginPage.isInvalidEmailMessageDisplayed()).toBe(true);
      expect(loginPage.isInvalidPasswordMessageDisplayed()).toBe(false);
    } else if (this.email.length > 0 && this.password.length < 8) {
      expect(loginPage.isInvalidEmailMessageDisplayed()).toBe(false);
      expect(loginPage.isInvalidPasswordMessageDisplayed()).toBe(true);
    } else {
      expect(loginPage.isInvalidEmailMessageDisplayed()).toBe(true);
      expect(loginPage.isInvalidPasswordMessageDisplayed()).toBe(true);
    }
  }

  // getEmailText() {
  //   return loginPage.$email.getValue();
  // }
}

export default LoginServices;
