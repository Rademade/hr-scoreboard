const axios = require("axios");

const LOG_IN = "Scoreboard/Login";
const LOG_IN_SUCESS = "Scoreboard/LoginSuccess";
const LOG_IN_FAIL = "Scoreboard/LoginFail";

const FETCH_VACANCIES = "Scoreboard/FetchVacancies";
const FETCH_VACANCIES_SUCCESS = "Scoreboard/FetchVacanciesSuccess";
const FETCH_VACANCIES_FAIL = "Scoreboard/FetchVacanciesFail";

// thunk actions
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

export function fetchVacanciesAsync() {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_VACANCIES });
      const response = await axios.post("/hr/client/get", {
        country: null,
        city: null,
        name: null
      });
      console.log("fetch response", response);
      dispatch({
        type: FETCH_VACANCIES_SUCCESS,
        payload: []
      });
    } catch (error) {
      dispatch({
        type: FETCH_VACANCIES_FAIL,
        payload: error
      });
    }
  };
}

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  items: {},
  user: {},
  error: null
};

export default function ScoreboardStateReducer(state = initialState, action) {
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
        user: action.payload
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_VACANCIES:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_VACANCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    case FETCH_VACANCIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
