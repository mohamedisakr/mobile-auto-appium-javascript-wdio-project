class Auth {
  get $email() {
    return $("~input-email");
  }

  get $password() {
    return $("~input-password");
  }

  get $loginButton() {
    return $("~button-LOGIN");
  }
}
module.exports = new Auth();
