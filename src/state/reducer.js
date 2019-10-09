import * as actionTypes from "./actionTypes";

const initialState = {
  isInitialize: false,
  isAuthenticated: false,
  isOnSync: false,
  userData: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ON_SYNC:
      return {
        ...state,
        isOnSync: action.payload
      };
    case actionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
