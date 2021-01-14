import form from "../page-objects/form.page";

const setInputText = (text) => {
  form.$textInput.waitForDisplayed();
  form.$textInput.setValue(text);
};

const getInputText = () => {
  form.$textInput.waitForDisplayed();
  form.$textInput.getText(); // .getValue();
};

const getResultText = () => {
  form.$inputTextResult.waitForDisplayed();
  form.$inputTextResult.getText();
};

const handleClickSwitch = () => {
  form.$switchButton.click();
};

const takeScreenshotForSwitch = () => {
  let fileName = Date.now();
  form.$switchButton.saveScreenshot(`./screenshots/switch-${fileName}.png`);
};

const handleClickActiveButton = () => {
  form.$buttonActive.click();
};

export {
  setInputText,
  getInputText,
  getResultText,
  handleClickSwitch,
  takeScreenshotForSwitch,
  handleClickActiveButton,
};
