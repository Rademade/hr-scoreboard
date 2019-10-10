import * as actionTypes from "./actionTypes";

const initialState = {
  isFirstLaunch: true,
  isAuthenticated: false,
  isOnSync: false,
  userData: null,
  vacancies: []
};

const appReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.START_SYNC:
      return {
        ...state,
        isOnSync: true
      };
    case actionTypes.END_SYNC:
      return {
        ...state,
        isOnSync: false
      };
    case actionTypes.SET_FIRST_LAUNCH:
      return {
        ...state,
        isFirstLaunch: payload
      };
    case actionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: payload
      };
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: payload
      };
    case actionTypes.SET_VACANCIES:
      return {
        ...state,
        vacancies: payload
      };
    default:
      return state;
  }
};

export default appReducer;
