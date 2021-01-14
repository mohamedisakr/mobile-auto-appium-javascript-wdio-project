import {
  homeButton,
  viewButton,
  loginButton,
  formsButton,
  swipeButton,
} from "../selectors/navbar.selectors";

class NavBar {
  get $homeButton() {
    return $(homeButton);
  }

  get $viewButton() {
    return $(viewButton);
  }

  get $loginButton() {
    return $(loginButton);
  }

  get $formsButton() {
    return $(formsButton);
  }

  get $swipeButton() {
    return $(swipeButton);
  }
}
export default new NavBar();
