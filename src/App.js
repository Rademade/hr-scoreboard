import React, { useReducer, createContext } from "react";
// import axios from "axios";
import firebase from "firebase";
import { firebaseConfig } from "firebase";
import { appReducer, initialState } from "./reducer";
import Scoreboard from "./components/Scoreboard";

firebase.initializeApp(firebaseConfig);
export const AppStateContext = createContext({});

const App = () => {
  const [state] = useReducer(appReducer, initialState);
  console.log("app state", state);

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
};

export default App;
