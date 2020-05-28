import React from "react";
import {NavLink} from 'react-router-dom';
import "./signup.css";

const SignUp = ( props ) => {
    let nickname = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let passwordAgain = React.createRef();    

    let signup = () => {
      let signupInfo = {
        nickname: nickname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      props.axiosSignup(signupInfo);
    };

  return (
    <div className="signup">
      <div className="auth-form">       
        <input className="auth-form_input" placeholder="Имя Пользователя" ref={nickname}/>
        <input className="auth-form_input" placeholder="Email" ref={email}/>
        <input className="auth-form_input" placeholder="Пароль" type="password" ref={password}/>
        <input className="auth-form_input" placeholder="Пароль еще раз" type="password" ref={passwordAgain}/>
        <button className="auth-form_button" onClick={signup}>Я ВЛЕТАЮ!</button>
        <div className="auth-form_redirect">Уже есть аккаунт?</div>
        <div className="auth-form_redirect-link"><NavLink  to="/signin">Войдите</NavLink></div>
      </div>
    </div>
  );
};

export default SignUp;

