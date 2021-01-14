import navbar from "../page-objects/navbar.page";

class NavBarServices {
  handleClickHomeButton() {
    navbar.$homeButton.click();
  }

  handleClickLoginButton() {
    navbar.$loginButton.click();
  }

  handleClickFormButton() {
    navbar.$formsButton.click();
  }

  isHomeButtonDisplayed() {
    return navbar.$homeButton.isDisplayed();
  }
}

export default new NavBarServices();
// export {
//   handleClickHomeButton,
//   handleClickLoginButton,
//   handleClickFormButton,
//   isHomeButtonDisplayed,
// };
