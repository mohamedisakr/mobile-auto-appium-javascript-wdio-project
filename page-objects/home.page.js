class Home {
  get $loginButton() {
    return $(
      "//android.view.ViewGroup[@content-desc='Login']/android.view.ViewGroup"
    );
  }
}
module.exports = new Home();
