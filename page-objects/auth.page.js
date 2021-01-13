import { EMAIL, PASSWORD, LOGIN_BUTTON } from "../selectors/auth.selectors";

class Auth {
  get $email() {
    return $(EMAIL); //"~input-email"
  }

  get $password() {
    return $(PASSWORD); //"~input-password"
  }

  get $loginButton() {
    return $(LOGIN_BUTTON); // "~button-LOGIN"
  }
}

// export default new Auth();
module.exports = new Auth();
