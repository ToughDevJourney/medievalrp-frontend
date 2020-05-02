const SET_SOCKET_ID = 'SET-SOCKET-ID';
const ADD_PLAYER = 'ADD-PLAYER';
const MOVE_PLAYER = 'MOVE-PLAYER';
const ADD_ALL_PLAYERS = 'ADD-ALL-PLAYERS'

let initStore = {
    playersArr: [
        //{ _id: "1", socketId: "qwe", name: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" }
        //сокет хранит в себе инфу: { _id: "1", socketId: "qwe", xPos: 960, yPos: 0, direction: 1}
        //остальная информация кверится из базы
        //при подключении самого игрока, кверить ее из базы и отправлять на серверную часть сокета
    ],
    socketId: ""
};

const playersReducer = (state = initStore, action) => {
    let newState;
    switch (action.type) {
        case ADD_PLAYER:
            debugger
            newState = { ...state, playersArr: [...state.playersArr, action.newPlayer] };
            if (newState.playersArr.length > 1) {
                [newState.playersArr[newState.playersArr.length - 1], newState.playersArr[newState.playersArr.length - 2]] =
                    [newState.playersArr[newState.playersArr.length - 2], newState.playersArr[newState.playersArr.length - 1]];
            }
            debugger
            return { ...newState };
        case ADD_ALL_PLAYERS:
            debugger
            newState = { ...state, playersArr: [...action.playersArr, ...state.playersArr] };
            debugger
            return { ...newState };
        case SET_SOCKET_ID:
            newState = { ...state, socketId: action.socketId };
            return { ...newState };
        case MOVE_PLAYER:
            
            newState = { ...state, playersArr: [...state.playersArr] };

            let playerIndex = newState.playersArr.findIndex(el => el.socketId === action.socketId);
            newState.playersArr[playerIndex].direction = action.direction;
            newState.playersArr[playerIndex].xPos = action.xPos;
            
            return { ...newState };
        default:
            return state;
    }
}


export const addPlayerActionCreator = (player) => ({ type: ADD_PLAYER, newPlayer: player });
export const addAllPlayersActionCreator = (playersArr) => ({ type: ADD_ALL_PLAYERS, playersArr });
export const setSocketIdActionCreator = (socketId) => ({ type: SET_SOCKET_ID, socketId });
export const movePlayerActionCreator = (socketId, xPos, direction) => ({ type: MOVE_PLAYER, socketId, xPos, direction });
export default playersReducer;