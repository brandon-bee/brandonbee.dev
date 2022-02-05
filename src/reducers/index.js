import { TOGGLE } from "../actions";

export const initialState = {
  darkMode: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE:
      return { darkMode: !state.darkMode };
    default:
      return state;
  };
};

export default reducer;