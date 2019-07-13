import { useEffect, useReducer } from "react";
import axios from "axios";

function dataReducer(state, action) {
  switch (action.type) {
    case "FETCH_VACANCIES":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_VACANCIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        items: action.payload
      };
    case "FETCH_VACANCIES_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      throw new Error();
  }
}

const initialState = {
  isLoading: false,
  items: [],
  error: null
};

export function useDataFetch() {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  // fires only once
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "FETCH_VACANCIES" });
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
            type: "FETCH_VACANCIES_SUCCESS",
            payload: data.objects
          });
        }
      } catch (error) {
        dispatch({
          type: "FETCH_VACANCIES_FAIL",
          payload: error.message
        });
      }
    }

    // fire!
    fetchData();
  }, []);
  const { isLoading, items, error } = state;
  return [{ items, dataLoading: isLoading, dataError: error }];
}
