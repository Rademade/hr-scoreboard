import React from "react";
import { Provider } from "react-redux";
import Scoreboard from "./scoreboard";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Scoreboard />
    </Provider>
  );
}
