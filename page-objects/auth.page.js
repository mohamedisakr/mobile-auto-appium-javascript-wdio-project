import { EMAIL, PASSWORD } from "../selectors/auth.selectors";

class Auth {
  get $email() {
    return $(EMAIL);
  }

  get $password() {
    return $(PASSWORD);
  }
}
export default Auth;

// module.exports = new Auth();
// export default new Auth();
