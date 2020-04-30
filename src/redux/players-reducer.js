const MOVE_PLAYER = 'MOVE-PLAYER';

let initStore = {
    playersArr: [
        { _id: "1", name: "player name", xPos: 10, yPos: 0, skin: "http://konvajs.github.io/assets/yoda.jpg" },
        { _id: "2", name: "player name", xPos: 0, yPos: 0, skin: "http://konvajs.github.io/assets/yoda.jpg" }
    ]
};

const playersReducer = (state = initStore, action) => {
    let newState;
    switch (action.type) {
        case MOVE_PLAYER:
            
            newState = {
                 ...state, 
                 playersArr: [...state.playersArr] 
            };
            debugger
            if (newState.playersArr[action.sessionId]) {
                newState.playersArr[action.sessionId].xPos += 10 * action.direction;
            }

            return {
                ...newState
            };
        default:
            return state;
    }
}


export const movePlayerActionCreator = (sessionId, direction) => ({ type: MOVE_PLAYER, direction, sessionId });
export default playersReducer;