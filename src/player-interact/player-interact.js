import store from '../redux/store';
import {movePlayerActionCreator} from '../redux/players-reducer'

document.onkeydown = handlePress;

function handlePress(e) {
    if (e.keyCode == '37') {
        store.dispatch(movePlayerActionCreator(0, -1))
        console.log("left");
        //не вызывать диспатчер напрямую, а отправлять экшн в сокет и вызывать его при ответе 
    }
    else if (e.keyCode == '39') {
        store.dispatch(movePlayerActionCreator(0, 1))
        console.log("right");
    }
}