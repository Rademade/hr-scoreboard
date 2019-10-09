import React, { useEffect } from "react";
import firebase from "firebase";
import {
  RootContainer,
  LaunchContainer,
  StyledTitle
} from "./components/Scoreboard";
import { firebaseConfig } from "./config";
import store from "./state/store";
import { authPing } from "./state/actions";

firebase.initializeApp(firebaseConfig);

const App = () => {
  console.log("app", store);

  useEffect(() => {
    // store.dispatch(auth());
    store.dispatch(authPing());
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
