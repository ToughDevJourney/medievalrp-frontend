import {connect} from 'react-redux';
import {signup} from '../../../api/axios/axios';
import SignUpPage from './signup';

let mapDispatchToProps = (dispatch) => {
    return{
        axiosSignup: (signupInfo, history) => signup(signupInfo, history)
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignUpPage);

export default SignUpContainer;