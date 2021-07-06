import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
  let email = React.createRef();
  let password = React.createRef();

  let signin = () => {
    debugger;
    let signInInfo = {
      email: email.current.value,
      password: password.current.value,
    };
    props.axiosSignin(signInInfo);
  };

  return (
    <div className="signin">
      <div className="auth-form">
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            placeholder="Email"
            ref={email}
          />
        </div>
        <div className="auth-form-field">
          <input
            className="auth-form-field_input"
            placeholder="Пароль"
            type="password"
            ref={password}
          />
        </div>
        <button className="auth-form_button" onClick={signin}>
          ВОЙТИ
        </button>
        <div className="auth-form_redirect">Еще нет аккаунта?</div>
        <div className="auth-form_redirect-link">
          <NavLink to="/signup">Зарегистрируйтесь</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
