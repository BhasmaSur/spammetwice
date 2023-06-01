export const userNameValidation = (userName) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (userName.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

const checkValidityOfPassword = (password, confirmPassword) => {
  if (
    password &&
    confirmPassword &&
    password.length > 7 &&
    confirmPassword.length > 7 &&
    password === confirmPassword
  ) {
    return true;
  }
  return false;
};

export const signUpValidations = (userName, password, confirmPassword) => {
  if (userNameValidation(userName)) {
    if (password && password.length > 7) {
      if (password === confirmPassword) {
        return {
          valid: true,
          message: "nothing",
        };
      } else {
        return {
          valid: false,
          message: "Password and confirm password should match.",
        };
      }
    } else {
      return {
        valid: false,
        message: "Password should be of length greater then or equal to 8",
      };
    }
  } else {
    return {
      valid: false,
      message: "Please provide valid email address",
    };
  }
};
