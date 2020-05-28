const ADD_MESSAGE = "ADD-MESSAGE";
const SWITCH_INPUT_FOCUS = "SWITCH-INPUT-FOCUS";

let initStore = {
  messagesArr: ["[MedievalRP]: Добро пожаловать!"],
  inputFocus: false,
};

const chatReducer = (state = initStore, action) => {
  let newState;
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = `[${action.nickname}]: ${action.text}`;

      newState = { ...state };
      newState.messagesArr = [...state.messagesArr, newMessage];

      return { ...newState };
    case SWITCH_INPUT_FOCUS:
      state.inputFocus = !state.inputFocus;

      return { ...state };
    default:
      return { ...state };
  }
};

export const addMessageActionCreator = (message) => ({
  type: ADD_MESSAGE,
  nickname: message.nickname,
  text: message.text,
});
export const switchInputFocusActionCreator = () => ({
  type: SWITCH_INPUT_FOCUS,
});

export default chatReducer;
