const axios = require("axios");

const FETCH_VACANCIES = "Scoreboard/FetchVacancies";
const FETCH_VACANCIES_SUCCESS = "Scoreboard/FetchVacanciesSuccess";
const FETCH_VACANCIES_FAIL = "Scoreboard/FetchVacanciesFail";

export function fetchVacanciesAsync() {
  return async dispatch => {
    try {
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
