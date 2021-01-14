import Auth from "./auth.page";
import { PASSWORD_REPEAT, SIGNUP_BUTTON } from "../selectors/auth.selectors";

class Signup extends Auth {
  get $passwordRepeat() {
    return $(PASSWORD_REPEAT);
  }

  get $signupButton() {
    return $(SIGNUP_BUTTON);
  }
}
export default new Signup();
