const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const ADD_MONEY = "ADD-MONEY";

let initStore = {
  _id: "1",
};

const characterReducer = (state = initStore, action) => {
  switch (action.type) {
    case SIGNUP:
        console.log(action.signUpInfo)
      return { ...state };
    case SIGNIN:
        console.log(action.signInInfo)
      return { ...state };
    case ADD_MONEY:
      return { ...state };
    default:
      return { ...state };
  }
};

export const addMoneyActionCreator = (amount) => ({ type: ADD_MONEY, amount });
export const signUpActionCreator = (signUpInfo) => ({ type: SIGNUP, signUpInfo });
export const signInActionCreator = (signInInfo) => ({ type: SIGNIN, signInInfo })
export default characterReducer;
