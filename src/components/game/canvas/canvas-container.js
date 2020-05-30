import { connect } from 'react-redux';
import Canvas from './canvas.js'

let mapStateToProps = (state) => {
  return {
    playersArr: state.playersInfo.playersArr,
  };
};


let CanvasContainer = connect(mapStateToProps, null)(Canvas);

export default CanvasContainer;

