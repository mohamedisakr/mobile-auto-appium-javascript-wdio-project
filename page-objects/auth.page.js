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

  login(email, password) {
    this.$email.setValue(email);
    this.$password.setValue(password);
    this.$loginButton.click();
  }
}
module.exports = new Auth();
