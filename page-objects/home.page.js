class Home {
  get $loginButton() {
    return $("~Login");
  }

  get $viewButton() {
    return $("~WebView");
  }

  get $homeButton() {
    return $("~WebHome");
  }

  get formsButton() {
    return $("~Forms");
  }

  get swipeButton() {
    return $("~Swipe");
  }
}
module.exports = new Home();
