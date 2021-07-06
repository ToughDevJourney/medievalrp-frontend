import React from "react";
import { NavLink } from "react-router-dom";
import { validateSignup } from "../../../helpers/validation";
import CONSTS from "../../../helpers/consts";
import "./signup.css";

const SignUp = (props) => {
  let nickname = React.createRef();
  let email = React.createRef();
  let password = React.createRef();
  let passwordRepeat = React.createRef();

  function validateField(type, input) {
    let isValid = validateSignup(type, input.value, password.current.value);
    setValidity(input, isValid);

    if (type === CONSTS.PASSWORD)
      validateField(CONSTS.PASSWORD_REPEAT, passwordRepeat.current);
  }

  function setValidity(input, isValid) {
    if (isValid) {
      input.classList.add("auth-form_input_color-green");
      input.classList.remove("auth-form_input_color-red");
      input.nextSibling.style.display = "none";
    } else {
      input.classList.remove("auth-form_input_color-green");
      input.classList.add("auth-form_input_color-red");
      input.nextSibling.style.display = "block";
    }
  }

  let signup = () => {
    if (
      validateSignup(CONSTS.NAME, nickname.current.value) &&
      validateSignup(CONSTS.EMAIL, email.current.value) &&
      validateSignup(CONSTS.PASSWORD, password.current.value) &&
      validateSignup(
        CONSTS.PASSWORD_REPEAT,
        passwordRepeat.current.value,
        password.current.value
      )
    ) {
      let signupInfo = {
        nickname: nickname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      props.axiosSignup(signupInfo);
    }
  };

  return (
    <div className="signup">
      <div className="auth-form">
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            onChange={(e) => validateField(CONSTS.NAME, e.target)}
            placeholder="Имя Пользователя"
            ref={nickname}
          />
          <div
            className="auth-form-field_error"
            tip-text="Ник должен содержать от 4 до 30 символов, цифр или знаков подчеркивания"
          >
            !
          </div>
        </div>
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            onChange={(e) => validateField(CONSTS.EMAIL, e.target)}
            placeholder="Email"
            ref={email}
          />
          <div
            className="auth-form-field_error"
            tip-text="Email должен содержать от 7 до 50 символов и быть в формате 'mymail@mail.ru'"
          >
            !
          </div>
        </div>
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            onChange={(e) => validateField(CONSTS.PASSWORD, e.target)}
            placeholder="Пароль"
            type="password"
            ref={password}
          />
          <div
            className="auth-form-field_error"
            tip-text="Пароль должен содержать от 7 до 50 символов"
          >
            !
          </div>
        </div>
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            onChange={(e) => validateField(CONSTS.PASSWORD_REPEAT, e.target)}
            placeholder="Пароль Еще Раз"
            type="password"
            ref={passwordRepeat}
          />
          <div
            className="auth-form-field_error"
            tip-text="Пароли не совпадают :("
          >
            !
          </div>
        </div>
        <button className="auth-form_button" onClick={signup}>
          ГДЕ МОЕ ЗЕРНО!?
        </button>
        <div className="auth-form_redirect">Уже есть аккаунт?</div>
        <div className="auth-form_redirect-link">
          <NavLink to="/signin">Войдите</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
