const FETCH_VACANCIES = "Scoreboard/FetchVacancies";
const FETCH_VACANCIES_SUCCESS = "Scoreboard/FetchVacanciesSuccess";
const FETCH_VACANCIES_FAIL = "Scoreboard/FetchVacanciesFail";

// action creators
function fetchVacancies() {
  return {
    type: FETCH_VACANCIES
  };
}

function fetchVacanciesSuccess(data) {
  return {
    type: FETCH_VACANCIES_SUCCESS,
    payload: { data }
  };
}

function fetchVacanciesFail(error) {
  return {
    type: FETCH_VACANCIES_FAIL,
    payload: { error }
  };
}

// thunk actions
export function fetchVacanciesAsync(value) {
  return async dispatch => {
    try {
      dispatch(fetchVacancies());

      // fetch here

      dispatch(
        fetchVacanciesSuccess({
          vacancies: []
        })
      );
    } catch (error) {
      console.log("fetchVacansiesAsync error log", error);
      dispatch(fetchVacanciesFail(error));
    }
  };
}

const initialState = {
  isLoading: false,
  data: {},
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
        data: action.payload.data
      };
    case FETCH_VACANCIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
