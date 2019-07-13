import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync, loginAsync } from "./ScoreboardState";

function mapStateToProps({ sboard }) {
  const { items, user, error, isLoading } = sboard;
  return {
    items,
    user,
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
