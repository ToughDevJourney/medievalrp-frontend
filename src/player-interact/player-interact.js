import store from '../redux/store';
import socket from '../api/socket'

document.onkeydown = handlePress;

function handlePress(e) {
    let socketId;

    switch (e.keyCode) {
        case 37:
            socketId = store.getState().playersInfo.socketId;            
            socket.emit('move player', {socketId, direction: -1});
            break;
        case 39:
            socketId = store.getState().playersInfo.socketId;
            socket.emit('move player', {socketId, direction: 1});
            break;
        default:
            break;
    };
}