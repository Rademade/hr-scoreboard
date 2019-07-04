import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync } from "./ScoreboardState";

function mapStateToProps(state) {
  return {
    isLoading: state.sboard.isLoading,
    data: state.sboard.data,
    error: state.sboard.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVacansies: () => dispatch(fetchVacanciesAsync())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardView);
