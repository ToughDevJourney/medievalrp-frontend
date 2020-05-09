import {connect} from 'react-redux';
import {signUpActionCreator} from '../../../redux/character-reducer';
import SignUp from './signup';

let mapDispatchToProps = (dispatch) => {
    return{
        register: (player) => {
            dispatch(signUpActionCreator(player));
        }
    }
}

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp);

export default SignUpContainer;