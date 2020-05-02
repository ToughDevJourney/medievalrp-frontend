const SET_SOCKET_ID = 'SET-SOCKET-ID';
const ADD_PLAYER = 'ADD-PLAYER';
const MOVE_PLAYER = 'MOVE-PLAYER';
const ADD_ALL_PLAYERS = 'ADD-ALL-PLAYERS'
const DELETE_PLAYER = 'DELETE-PLAYER'

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
    let playerIndex;

    switch (action.type) {
        case ADD_PLAYER:
            if (state.socketId !== "") {
                playerIndex = state.playersArr.findIndex(el => el.socketId === action.socketId);

                newState = { ...state, playersArr: [...state.playersArr, action.newPlayer] };

                if (newState.playersArr.length > 1) {
                    [newState.playersArr[newState.playersArr.length - 1], newState.playersArr[newState.playersArr.length - 2]] =
                        [newState.playersArr[newState.playersArr.length - 2], newState.playersArr[newState.playersArr.length - 1]];
                }
            }

            return { ...newState };
        case ADD_ALL_PLAYERS:
            newState = { ...state, playersArr: [...action.playersArr, ...state.playersArr] };
            return { ...newState };
        case SET_SOCKET_ID:
            newState = { ...state, socketId: action.socketId };
            return { ...newState };
        case MOVE_PLAYER:

            newState = { ...state, playersArr: [...state.playersArr] };

            playerIndex = newState.playersArr.findIndex(el => el.socketId === action.socketId);
            newState.playersArr[playerIndex].direction = action.direction;
            newState.playersArr[playerIndex].xPos = action.xPos;

            return { ...newState };
        case DELETE_PLAYER:

            newState = { ...state, playersArr: [...state.playersArr] };
            playerIndex = newState.playersArr.findIndex(el => el.socketId === action.socketId);
            newState.playersArr.splice(playerIndex, 1);

            return { ...newState };
        default:
            return state;
    }
}


export const addPlayerActionCreator = (player) => ({ type: ADD_PLAYER, newPlayer: player });
export const addAllPlayersActionCreator = (playersArr) => ({ type: ADD_ALL_PLAYERS, playersArr });
export const setSocketIdActionCreator = (socketId) => ({ type: SET_SOCKET_ID, socketId });
export const movePlayerActionCreator = (socketId, xPos, direction) => ({ type: MOVE_PLAYER, socketId, xPos, direction });
export const deletePlayerActionCreator = (socketId) => ({ type: DELETE_PLAYER, socketId });
export default playersReducer;