import chai from "chai";
import { handleClickFormButton } from "../../services/home.services";
import {
  setInputText,
  getInputText,
  getResultText,
  handleClickSwitch,
  takeScreenshotForSwitch,
  handleClickActiveButton,
} from "../../services/form.services";

const expect = chai.expect;
/*
//
describe("form page", () => {
  // Execute a block of code before every test
  // 1. click on form in main screen
  beforeEach(() => {
    handleClickFormButton();
  });

  
  // it("Verify that text as in text result", () => {
  //   // 2. setValue from input text
  //   setInputText("salam");
  //   // 3. getValue from input text
  //   const actual = getInputText();
  //   // 3. check if text === result
  //   const expected = getResultText();
  //   driver.pause(3000);
  //   expect(actual).to.be.equal(expected);
  // });
  

  
  // it("Toggle switch button", () => {
  //   handleClickSwitch();
  //   let fileName = Date.now();
  //   driver.saveScreenshot(`./screenshots/${fileName}.png`);

  //   takeScreenshotForSwitch();
  // });
  
  
  it("swipe to button", () => {
    handleClickActiveButton();
  });
  
});
// */
