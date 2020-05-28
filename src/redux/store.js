import {createStore, combineReducers} from 'redux';
import playersReducer from './players-reducer.js';
import userReducer from './user-reducer.js';
import chatReducer from './chat-reducer.js'

let reducers = combineReducers({
    playersInfo: playersReducer,
    userInfo: userReducer,
    chatInfo: chatReducer
});

let store = createStore(reducers);

window.store = store;
window.dispatch = store.dispatch;

export default store;