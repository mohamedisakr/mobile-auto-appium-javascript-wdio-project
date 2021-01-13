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

export { setInputText, getInputText, getResultText };
