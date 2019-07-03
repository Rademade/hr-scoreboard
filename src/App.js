import React from "react";
import { Provider } from "react-redux";
import createStore from "./state/createStore";
import Scoreboard from "./Scoreboard";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Scoreboard />
  </Provider>
);

export default App;
