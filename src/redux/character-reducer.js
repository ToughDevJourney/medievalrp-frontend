const ADD_MONEY = 'ADD-MONEY';

let initStore = {
    _id: "1"
};

const characterReducer = (state = initStore, action) => {
    switch (action.type) {
        case ADD_MONEY:
            return { 
                ...state
            };
        default:
            return state;
    }
}

export const addMoneyActionCreator = (amount) => ({ type: ADD_MONEY, amount});
export default characterReducer;