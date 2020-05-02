import openSocket from 'socket.io-client';
import store from '../redux/store.js'
import {addPlayerActionCreator, setSocketIdActionCreator, addAllPlayersActionCreator, movePlayerActionCreator} from '../redux/players-reducer'

const socket = openSocket('http://localhost:4000');
//Ивант подключения самого пользователя
socket.on('player connection', socketId => {
    //вместо этой строки будет запрос в базу по айди пользака
    let player = { _id: "1", socketId, name: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" };
    store.dispatch(addPlayerActionCreator(player));
    store.dispatch(setSocketIdActionCreator(socketId));
    socket.emit('player connected', player);
})  
//Ивент подключения нового (другого) игрока 
socket.on('new player connected', player => { store.dispatch(addPlayerActionCreator(player)); })  

socket.on('add all players', playersArr => { store.dispatch(addAllPlayersActionCreator(playersArr)); })
socket.on('move player', player => { store.dispatch(movePlayerActionCreator(player.socketId, player.xPos, player.direction)); }) 

export default socket;