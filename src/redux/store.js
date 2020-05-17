import {createStore, combineReducers} from 'redux';
import playersReducer from './players-reducer.js';
import userReducer from './user-reducer.js';

let reducers = combineReducers({
    playersInfo: playersReducer,
    userInfo: userReducer
});

let store = createStore(reducers);

window.store = store;
window.dispatch = store.dispatch;

export default store;