const axios = require("axios");

const LOG_IN = "Scoreboard/Login";
const LOG_IN_SUCESS = "Scoreboard/LoginSuccess";
const LOG_IN_FAIL = "Scoreboard/LoginFail";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: {},
  error: null
};

export function loginAsync() {
  return async dispatch => {
    try {
      dispatch({ type: LOG_IN });
      const response = await axios.post("/hr/person/auth", {
        login: "viktor@rademade.com",
        password: "a343parder433b"
      });
      console.log("login response", response);
      dispatch({ type: LOG_IN_SUCESS, payload: {} });
    } catch (error) {
      dispatch({
        type: LOG_IN_FAIL,
        payload: error
      });
    }
  };
}

export default function AuthStateReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOG_IN_SUCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
