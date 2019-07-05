import { combineReducers } from "redux";

import sboard from "../scoreboard/ScoreboardState";
import auth from "../scoreboard/AuthState";

export default combineReducers({
  sboard,
  auth
});
