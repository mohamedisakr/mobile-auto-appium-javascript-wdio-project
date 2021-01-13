import {
  textInput,
  inputTextResult,
  switchButton,
  selectDropdown,
  buttonActive,
  buttonInactive,
} from "../selectors/form.selectors";

class Form {
  get $textInput() {
    return $(textInput); // $("~text-input"); //
  }
  get $inputTextResult() {
    return $(inputTextResult); // $("~input-text-result"); //
  }
  get $switchButton() {
    return $(switchButton); //$("~switch"); //
  }
  get $selectDropdown() {
    return $(selectDropdown); //$("~select-Dropdown"); //
  }
  get $buttonActive() {
    return $(buttonActive); // $("~button-Active"); //
  }
  get $buttonInactive() {
    return $(buttonInactive); // $("~button-Inactive"); //
  }
}
module.exports = new Form();
