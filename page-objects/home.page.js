class Home {
  get $homeButton() {
    return $("~Home");
  }

  get $viewButton() {
    return $("~WebView");
  }

  get $loginButton() {
    return $("~Login");
  }

  get $formsButton() {
    return $("~Forms");
  }

  get $swipeButton() {
    return $("~Swipe");
  }
}
module.exports = new Home();
