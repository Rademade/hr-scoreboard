import * as actionTypes from "./actionTypes";

const initialState = {
  isInitialize: false,
  isAuthenticated: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
