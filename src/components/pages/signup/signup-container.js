import {connect} from 'react-redux';
import {signup} from '../../../api/axios/axios';
import SignUpPage from './signup';

let mapDispatchToProps = (dispatch) => {
    return{
        axiosSignup: (signupInfo) => signup(signupInfo)
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignUpPage);

export default SignUpContainer;