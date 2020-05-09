import {connect} from 'react-redux';
import {signInActionCreator} from '../../../redux/character-reducer';
import SignIn from './signin';

let mapDispatchToProps = (dispatch) => {
    return{
        login: (signInInfo) => {
            dispatch(signInActionCreator(signInInfo));
        }
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignIn);

export default SignUpContainer;