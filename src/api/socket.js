import openSocket from 'socket.io-client';
import store from '../redux/store.js'
import {addPlayerActionCreator, setSocketIdActionCreator} from '../redux/players-reducer'

const socket = openSocket('http://localhost:4000');

socket.on('player connection', socketId => {
    console.log('player connection', socketId)
    store.dispatch(setSocketIdActionCreator(socketId));
})  

socket.on('new player connected', socketId => {
    console.log('new player connected', socketId)
    store.dispatch(addPlayerActionCreator(socketId));
})  

socket.on('move player', action => {
    console.log('move player', action)
    store.dispatch(action);
}) 

export default socket;