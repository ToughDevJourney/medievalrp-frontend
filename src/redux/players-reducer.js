const ADD_PLAYER = "ADD-PLAYER";
const SET_MESSAGE = "SET-MESSAGE";
const MOVE_PLAYER = "MOVE-PLAYER";
const ADD_ALL_PLAYERS = "ADD-ALL-PLAYERS";
const DELETE_PLAYER = "DELETE-PLAYER";


let initStore = {
  playersArr: [
    //{ _id: "1", nickname: "player name", xPos: 960, yPos: 0, direction: 1, skin: "peasant" }
  ],
  loading: true,
};

const playersReducer = (state = initStore, action) => {
  let newState;
  let playerIndex;

  switch (action.type) {
    case ADD_PLAYER:      
      newState = {
        ...state,
        playersArr: [...state.playersArr, {...action.newPlayer, message: ""} ],
      };      

      return { ...newState };
    case ADD_ALL_PLAYERS:
      let playersArr = action.playersArr.map(el => ({...el, message: ""}))
debugger
      newState = {
        ...state,
        playersArr: [...playersArr],
        loading: false
      };
      return { ...newState };
    case SET_MESSAGE:
      newState = { ...state, playersArr: [...state.playersArr] };

      playerIndex = newState.playersArr.findIndex(
        (el) => el.socketId === action.socketId
      );
      if (playerIndex !== -1) {
        if(action.text === ""){
          newState.playersArr[playerIndex].message = ""
        }
        else{
          newState.playersArr[playerIndex].message = `\n\n${action.text}`;
        }        
      }
      return { ...newState };      
    case MOVE_PLAYER:
      newState = { ...state, playersArr: [...state.playersArr] };

      playerIndex = newState.playersArr.findIndex(
        (el) => el.socketId === action.socketId
      );
      if (playerIndex !== -1) {
        newState.playersArr[playerIndex].direction = action.direction;
        newState.playersArr[playerIndex].xPos = action.xPos;
      }
      return { ...newState };
    case DELETE_PLAYER:
      newState = { ...state, playersArr: [...state.playersArr] };
      playerIndex = newState.playersArr.findIndex(
        (el) => el.socketId === action.socketId
      );
      if (playerIndex !== -1) {
        newState.playersArr.splice(playerIndex, 1);
      }

      return { ...newState };
    default:
      return state;
  }
};


export const addPlayerActionCreator = (player) => ({
  type: ADD_PLAYER,
  newPlayer: player,
});
export const addAllPlayersActionCreator = (playersArr) => ({
  type: ADD_ALL_PLAYERS,
  playersArr,
});
export const setMessageActionCreator = (message) => ({
  type: SET_MESSAGE,
  socketId: message.socketId,
  text: message.text
});
export const movePlayerActionCreator = (player) => ({
  type: MOVE_PLAYER,
  socketId: player.socketId,
  xPos: player.xPos,
  direction: player.direction,
});
export const deletePlayerActionCreator = (socketId) => ({
  type: DELETE_PLAYER,
  socketId,
});
export default playersReducer;
