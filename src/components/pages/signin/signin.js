import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
    let email = React.createRef();
    let password = React.createRef();

    let signin = () => {        
        let signInInfo = {
            email: email.current.value,
            password: password.current.value
        }
        props.axiosSignin(signInInfo);
    }



  return (
    <div className="signin">
      <div className="auth-form">       
        <input className="auth-form_input" placeholder="Email" ref={email}/>
        <input className="auth-form_input" placeholder="Пароль" type="password" ref={password}/>
        <button className="auth-form_button" onClick={signin}>ВОЙТИ</button>
        <div className="auth-form_redirect">Еще нет аккаунта?</div>
        <div className="auth-form_redirect-link"><NavLink to="/signup">Зарегистрируйтесь</NavLink></div>
      </div>
    </div>
  );
};

export default SignIn;

