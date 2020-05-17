import {connect} from 'react-redux';
import {signin} from '../../../api/axios/axios';
import SignInPage from './signin';

/*
let mapStateToProps = (state) => {
  return{
    loggedIn: state.authInfo.loggedIn
  }
}
*/
let mapDispatchToProps = () => {
    return{
        axiosSignin: (signInInfo, history) => signin(signInInfo, history)
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignInPage);

export default SignUpContainer;