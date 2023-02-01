export const userNameValidation = (userName) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (userName.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const signUpValidations = (userName, password, confirmPassword) => {
  if (
    password.length > 8 &&
    password === confirmPassword &&
    userName &&
    userNameValidation(userName)
  ) {
    return {
      valid: true,
      message: "nothing",
    };
  } else {
    if (userName === "" || userName === null) {
      return {
        valid: false,
        message: "please provide valid email address",
      };
    }

    if (!userNameValidation(userName)) {
      return {
        valid: false,
        message: "please provide valid email address",
      };
    }

    if (password === "" || password === null || password.length < 8) {
      return {
        valid: false,
        message: "please provide password of length equal or more then 8",
      };
    }

    if (password !== confirmPassword) {
      return {
        valid: false,
        message: "password and confirm password is not matching",
      };
    }
  }
};
