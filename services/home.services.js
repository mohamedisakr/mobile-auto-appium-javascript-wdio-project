import home from "../page-objects/home.page";

const handleClickHomeButton = () => {
  home.$homeButton.click();
};

const handleClickLoginButton = () => {
  home.$loginButton.click();
};

const handleClickFormButton = () => {
  home.$formsButton.click();
};

const isHomeButtonDisplayed = () => {
  return home.$homeButton.isDisplayed();
};

export {
  handleClickHomeButton,
  handleClickLoginButton,
  handleClickFormButton,
  isHomeButtonDisplayed,
};
