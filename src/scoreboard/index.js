import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync, loginAsync } from "./ScoreboardState";

function mapStateToProps(state) {
  return {
    isLoading: state.sboard.isLoading,
    items: state.sboard.items,
    user: state.sboard.user,
    error: state.sboard.error
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
