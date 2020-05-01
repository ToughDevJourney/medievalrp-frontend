const SET_SOCKET_ID = 'SET-SOCKET-ID';
const ADD_PLAYER = 'ADD-PLAYER';
const MOVE_PLAYER = 'MOVE-PLAYER';

let initStore = {
    playersArr: [
        //{ _id: "1", socketId: "qwe", name: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" }
    ],
    socketId: "qwe"
};

const playersReducer = (state = initStore, action) => {
    let newState;
    switch (action.type) {
        case MOVE_PLAYER:

            newState = { ...state, playersArr: [...state.playersArr] };

            let playerIndex = newState.playersArr.findIndex(el => el.socketId === action.socketId);

            if (playerIndex !== -1) {
                debugger
                if (newState.playersArr[playerIndex].direction !== action.direction) {
                    newState.playersArr[playerIndex].direction = action.direction;
                    newState.playersArr[playerIndex].xPos -= 50 * action.direction;
                }                
                newState.playersArr[playerIndex].xPos += 10 * action.direction;                
            }

            return {
                ...newState
            };
        case ADD_PLAYER:
            newState = { ...state, playersArr: [...state.playersArr, action.newPlayer] };
            return {
                ...newState
            };
        case SET_SOCKET_ID:
            newState = { ...state, socketId: action.socketId };

            return {
                ...newState
            };
        default:
            return state;
    }
}


export const addPlayerActionCreator = (socketId) => ({ type: ADD_PLAYER, newPlayer: { _id: "3", socketId, name: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" } });
export const setSocketIdActionCreator = (socketId) => ({ type: SET_SOCKET_ID, socketId });
export const movePlayerActionCreator = (socketId, direction) => ({ type: MOVE_PLAYER, direction, socketId });
export default playersReducer;