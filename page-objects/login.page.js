import Auth from "./auth.page";
import {
  LOGIN_BUTTON,
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from "../selectors/auth.selectors";

class Login extends Auth {
  get $loginButton() {
    return $(LOGIN_BUTTON);
  }

  get $invalidEmailMessage() {
    return $(INVALID_EMAIL_MESSAGE);
  }

  get $invalidPasswordMessage() {
    return $(INVALID_PASSWORD_MESSAGE);
  }

  isInThis() {
    return this.$loginButton.isDisplayed();
  }

  isInvalidEmailMessageDisplayed() {
    this.$invalidEmailMessage.waitForDisplayed();
    return this.$invalidEmailMessage.isDisplayed();
  }

  isInvalidPasswordMessageDisplayed() {
    this.$invalidPasswordMessage.waitForDisplayed();
    return this.$invalidPasswordMessage.isDisplayed();
  }
}

export default new Login();
