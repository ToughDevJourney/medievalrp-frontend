import {createStore, combineReducers} from 'redux';
import characterReducer from './character-reducer.js';
import playersReducer from './players-reducer.js';

let reducers = combineReducers({
    characterInfo: characterReducer,
    playersInfo: playersReducer
});

let store = createStore(reducers);

window.store = store;
window.dispatch = store.dispatch;

export default store;