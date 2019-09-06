import React, { useReducer, createContext, useEffect } from "react";
import { auth } from "./api";
import { appReducer, initialState } from "./reducer";
import Scoreboard from "./components/Scoreboard";

export const AppStateContext = createContext({});

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log("app state", state);

  useEffect(() => {
    async function doAuth() {
      try {
        const response = await auth({
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        });
        console.log("auth resp", response);
        // const data = await vacancies({ id: 3 });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    doAuth();
  }, []);

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
};

export default App;
