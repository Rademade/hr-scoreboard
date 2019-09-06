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
        const response = await auth({ username: "viktor" });
        console.log("auth resp", response);
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
