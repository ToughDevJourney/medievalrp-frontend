import CONSTS from "./consts";

export function validateSignup(type, val, option = null) {
  switch (type) {
    case CONSTS.NAME:
      return validateName(val);
    case CONSTS.EMAIL:
      return validateEMail(val);
    case CONSTS.PASSWORD:
      return validatePassword(val);
    case CONSTS.PASSWORD_REPEAT:
      return validatePasswordRepeat(val, option);
    default:
      return false;
  }
}

function validateName(val) {
  return (
    val.length >= 4 && val.length <= 30 && /^[а-яА-Яa-zA-Z0-9-_]+$/.test(val)
  );
}

function validateEMail(val) {
  return (
    val.length >= 7 &&
    val.length <= 50 &&
    /^[A-Za-z\d]+@[A-Za-z\d]+\.[A-Za-z\d]+$/.test(val)
  );
}

function validatePassword(val) {
  return val.length >= 7 && val.length <= 50;
}

function validatePasswordRepeat(passwordRepeatVal, passwordVal) {
  return passwordVal === passwordRepeatVal;
}
