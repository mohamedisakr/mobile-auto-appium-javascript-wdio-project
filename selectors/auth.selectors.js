const SELECTORS = {
  EMAIL: "~input-email",
  PASSWORD: "~input-password",
  LOGIN_BUTTON: "~button-LOGIN",
  PASSWORD_REPEAT: "~input-repeat-password",
  SIGNUP_BUTTON: "~button-SIGN UP",
  INVALID_EMAIL_MESSAGE: "//*[@text='Please enter a valid email address']",
  INVALID_PASSWORD_MESSAGE: "//*[@text='Please enter at least 8 characters']",
};

export const {
  EMAIL,
  PASSWORD,
  LOGIN_BUTTON,
  PASSWORD_REPEAT,
  SIGNUP_BUTTON,
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} = SELECTORS;
