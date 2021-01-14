import {
  messageTitle,
  messageContent,
  okButton,
} from "../selectors/login.message.popup.selectors";

class LoginMessagePopup {
  get $messageTitle() {
    return $(messageTitle);
  }

  get $messageContent() {
    return $(messageContent);
  }

  get $okButton() {
    return $(okButton);
  }
}

export default new LoginMessagePopup();
