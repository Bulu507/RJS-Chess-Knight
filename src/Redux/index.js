import { createStore } from "redux";

const initialState = {
  playerPos: [2, 4]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYER_POS":
      return {
        ...state,
        playerPos: action.value
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
