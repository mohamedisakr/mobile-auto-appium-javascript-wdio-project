import Auth from "./auth.page";
import { LOGIN_BUTTON } from "../selectors/auth.selectors";

class Login extends Auth {
  get $loginButton() {
    return $(LOGIN_BUTTON);
  }
}

export default new Login();
