import { useReducer, useEffect } from "react";
import { apiRequest, fetchStatisticsLoop, formItemsWithStats } from "../utils";

const FETCH_DATA = "fetchData";
const LOG_IN_SUCCESS = "loginSuccess";
const SET_VACANCIES = "setVacancies";
const SET_STATISTICS = "setStatistics";
const SET_ERROR = "setError";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  vacancies: [],
  itemsWithStats: [],
  error: null
};

function sboardReducer(state, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case SET_VACANCIES:
      return {
        ...state,
        vacancies: action.payload
      };
    case SET_STATISTICS:
      return {
        ...state,
        isLoading: false,
        itemsWithStats: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export function useSboardState() {
  const [state, dispatch] = useReducer(sboardReducer, initialState);
  useEffect(() => {
    async function fetchDataAsync() {
      dispatch({ type: FETCH_DATA });
      try {
        // const authData = await apiRequest("post", "/hr/person/auth", {
        //   login: process.env.REACT_APP_USERNAME,
        //   password: process.env.REACT_APP_PASSWORD
        // });
        // dispatch({ type: LOG_IN_SUCCESS, payload: authData.object });
        dispatch({ type: LOG_IN_SUCCESS, payload: {} });
        const vacanciesData = await apiRequest("post", "/hr/vacancy/get", {
          page: {
            number: 0,
            count: 15
          }
        });
        const items = vacanciesData.objects;
        dispatch({ type: SET_VACANCIES, payload: items });
        const respArray = await fetchStatisticsLoop(items);
        const itemsWithStats = formItemsWithStats(items, respArray);
        dispatch({ type: SET_STATISTICS, payload: itemsWithStats });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
      }
    }
    fetchDataAsync();
  }, []);

  return state;
}
