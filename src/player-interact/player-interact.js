import store from '../redux/store';
import socket from '../api/socket'
import {movePlayerActionCreator} from '../redux/players-reducer'

document.onkeydown = handlePress;

function handlePress(e) {
    let socketId;
    console.log(e.keyCode)
    switch(e.keyCode){
        
        case 37:
            socketId = store.getState().playersInfo.socketId;    
            socket.emit('move player', movePlayerActionCreator(socketId, -1));
            break;
        case 39:
            socketId = store.getState().playersInfo.socketId;
            socket.emit('move player', movePlayerActionCreator(socketId, 1));
            break;
    };
}