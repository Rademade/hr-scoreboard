import axios from "axios";

const LOG_IN = "Scoreboard/Login";
const LOG_IN_SUCCESS = "Scoreboard/LoginSuccess";
const LOG_IN_FAIL = "Scoreboard/LoginFail";

const FETCH_VACANCIES = "Scoreboard/FetchVacancies";
const FETCH_VACANCIES_SUCCESS = "Scoreboard/FetchVacanciesSuccess";
const FETCH_VACANCIES_FAIL = "Scoreboard/FetchVacanciesFail";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  items: [],
  user: null,
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
      const { data } = response;
      if (data.status === "error") {
        throw new Error(data.message);
      } else {
        dispatch({ type: LOG_IN_SUCCESS, payload: data.object });
      }
    } catch (error) {
      dispatch({
        type: LOG_IN_FAIL,
        payload: error.message
      });
    }
  };
}

export function fetchVacanciesAsync() {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_VACANCIES });
      const response = await axios.post("/hr/vacancy/get", {
        page: {
          number: 0,
          count: 15
        }
      });
      const { data } = response;
      if (data.status === "error") {
        throw new Error(data.message);
      } else {
        dispatch({
          type: FETCH_VACANCIES_SUCCESS,
          payload: data.objects
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_VACANCIES_FAIL,
        payload: error.message
      });
    }
  };
}

export default function ScoreboardStateReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOG_IN_SUCCESS:
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
