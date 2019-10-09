import React, { useEffect } from "react";
import firebase from "firebase";
import {
  RootContainer,
  LaunchContainer,
  StyledTitle
} from "./components/Scoreboard";
import { firebaseConfig } from "./config";
import store from "./state/store";
import { startSync } from "./state/actions";

firebase.initializeApp(firebaseConfig);
const App = () => {
  useEffect(() => {
    const { dispatch, getState } = store;
    const { isInitialize } = getState();
    if (!isInitialize) {
      dispatch(startSync());
    }
    const interval = setInterval(() => dispatch(startSync()), 3600 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <RootContainer>
      <LaunchContainer>
        <StyledTitle>HR Scoreboard</StyledTitle>
      </LaunchContainer>
    </RootContainer>
  );
};

export default App;
