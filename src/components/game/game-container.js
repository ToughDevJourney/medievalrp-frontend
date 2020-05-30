import { connect } from 'react-redux';
import Game from './game'
import { connectUser } from "../../api/socket/socket"

let mapStateToProps = (state) => {
  return {
    playersLoading: state.playersInfo.loading,
  };
};

let mapDispatcherToProps = () => {
  return {
    connectUser: () => connectUser()
  };
};

let GameContainer = connect(mapStateToProps, mapDispatcherToProps)(Game);

export default GameContainer;



