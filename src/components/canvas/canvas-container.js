import { connect } from 'react-redux';
import { connectUser } from "../../api/socket/socket"
import Canvas from './canvas.js'

let mapStateToProps = (state) => {
       return {
              playersArr: state.playersInfo.playersArr
       }
}

let mapDispatcherToProps = () => {
       return {
              connectUser: () => connectUser()
       }
}

let CanvasContainer = connect(mapStateToProps, mapDispatcherToProps)(Canvas);

export default CanvasContainer;

