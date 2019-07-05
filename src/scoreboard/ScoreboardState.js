const axios = require("axios");

const FETCH_VACANCIES = "Scoreboard/FetchVacancies";
const FETCH_VACANCIES_SUCCESS = "Scoreboard/FetchVacanciesSuccess";
const FETCH_VACANCIES_FAIL = "Scoreboard/FetchVacanciesFail";

// TODO: check if cookies updated?? how???
async function logInFetch() {
  const response = await axios.post("/hr/person/auth", {
    login: "viktor@rademade.com",
    password: "a343parder433b"
  });
  const { status, code, message } = response.data;
  if (status === "error") {
    console.log("---------------------------");
    console.log("logInFetchError", code);
    console.log("message:", message);
    console.log("---------------------------");
    throw response.data;
  }
}

export function fetchVacanciesAsync() {
  return async dispatch => {
    try {
      /* preforh auth to get cookies,
         fetch data afterwards */

      await logInFetch();
      dispatch({ type: FETCH_VACANCIES });
      const response = await axios.post("/hr/client/get", {
        country: null,
        city: null,
        name: null
      });
      dispatch({
        type: FETCH_VACANCIES_SUCCESS,
        payload: response.data.objects
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
  data: null,
  error: null
};

export default function ScoreboardStateReducer(state = initialState, action) {
  switch (action.type) {
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
        data: action.payload
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
