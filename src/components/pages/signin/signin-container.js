import {connect} from 'react-redux';
import {signin} from '../../../api/axios/axios';
import SignInPage from './signin';


let mapDispatchToProps = () => {
    return{
        axiosSignin: (signInInfo) => signin(signInInfo)
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignInPage);

export default SignUpContainer;