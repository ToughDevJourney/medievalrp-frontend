const SET_USER_INFO = "SET-USER-INFO";

let initStore = {
    _id: "1",
    nickname: "null",
    skin: "peasant",    
};

const usersReducer = (state = initStore, action) => {
  switch (action.type) {
    case SET_USER_INFO:
        state._id = action._id;
        state.skin = action.skin;
        state.nickname = action.nickname;
        return state;
    default:
      return { ...state };
  }
};

export const setUserInfoActionCreator = (userInfo) => ({
  type: SET_USER_INFO,
  _id: userInfo._id,
  skin: userInfo.skin,
  nickname: userInfo.nickname,
});
export default usersReducer;
