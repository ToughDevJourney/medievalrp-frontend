const MOVE_PLAYER = 'MOVE-PLAYER';

let initStore = {
    playersArr: [
        { _id: "1", name: "player name", xPos: 10, yPos: 0, direction: -1, skin: "peasant" },
        { _id: "2", name: "player name", xPos: 0, yPos: 0, direction: 1, skin: "peasant" }
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
            
            if (newState.playersArr[action.sessionId]) {
                newState.playersArr[action.sessionId].xPos += 10 * action.direction;
                if (newState.playersArr[action.sessionId].direction !== action.direction){                    
                    newState.playersArr[action.sessionId].direction = action.direction;
                    newState.playersArr[action.sessionId].xPos -= 50 * action.direction;
                }
                
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