import openSocket from 'socket.io-client';
import store from '../redux/store.js'
import {addPlayerActionCreator, setSocketIdActionCreator, addAllPlayersActionCreator,
    movePlayerActionCreator, deletePlayerActionCreator} from '../redux/players-reducer'

const socket = openSocket(`http://${window.location.hostname}:4000`);
//Ивант подключения самого пользователя
socket.on('player connection', data => {
    //вместо этой строки будет запрос в базу по айди пользака
    let player = { _id: "1", socketId: data.socketId, name: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" };
    store.dispatch(addAllPlayersActionCreator(data.playersArr));
    store.dispatch(setSocketIdActionCreator(data.socketId));
    store.dispatch(addPlayerActionCreator(player));    
    socket.emit('player connected', player);

    //Ивент подключения нового (другого) игрока 
    socket.on('new player connected', data => { store.dispatch(addPlayerActionCreator(data)); })
    socket.on('move player', data => { store.dispatch(movePlayerActionCreator(data)); }) 
    socket.on('delete player', data => { store.dispatch(deletePlayerActionCreator(data)); })
})  


export default socket;