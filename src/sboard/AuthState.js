import { useEffect, useReducer } from "react";
import axios from "axios";

function authReducer(state, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoading: true
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload
      };
    case "LOG_IN_FAIL":
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
  isLoggedIn: false,
  user: {
    fullName: ""
  },
  error: null
};

export function useLoginFetch() {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // fires only once
  useEffect(() => {
    async function login() {
      dispatch({ type: "LOG_IN" });
      try {
        const response = await axios.post("/hr/person/auth", {
          login: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        });
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        } else {
          dispatch({ type: "LOG_IN_SUCCESS", payload: data.object });
        }
      } catch (error) {
        dispatch({
          type: "LOG_IN_FAIL",
          payload: error.message
        });
      }
    }

    // fire!
    login();
  }, []);
  const { isLoading, user, error } = state;
  return [{ user, authLoading: isLoading, authError: error }];
}
