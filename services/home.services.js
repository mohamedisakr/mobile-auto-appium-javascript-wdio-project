import home from "../page-objects/home.page";

const handleClickHomeButton = () => {
  home.$homeButton.click();
};

const isHomeButtonDisplayed = () => {
  return home.$homeButton.isDisplayed();
};

export { handleClickHomeButton, isHomeButtonDisplayed };
