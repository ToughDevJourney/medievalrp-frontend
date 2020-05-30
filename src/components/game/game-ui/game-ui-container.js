import { connect } from 'react-redux';
import GameUI from './game-ui'
import {switchInputFocusActionCreator} from '../../../redux/chat-reducer'
import {sendMessage} from '../../../api/socket/socket'

let mapStateToProps = (state) => {
  return {
    messagesArr: state.chatInfo.messagesArr,
  };
};

let mapDispatcherToProps = (dispatch) => {
  return {
    switchInputFocus: () => dispatch(switchInputFocusActionCreator()),
    sendMessage: (message) => sendMessage(message),
  };
};

let CanvasContainer = connect(mapStateToProps, mapDispatcherToProps)(GameUI);

export default CanvasContainer;

