import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync } from "./ScoreboardState";
import { loginAsync } from "./AuthState";

function mapStateToProps({ auth, sboard }) {
  const error = sboard.error || auth.error;
  const isLoading = sboard.isLoading || auth.isLoading;
  return {
    items: sboard.items,
    error,
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVacansies: () => dispatch(fetchVacanciesAsync()),
    logIn: () => dispatch(loginAsync())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardView);
