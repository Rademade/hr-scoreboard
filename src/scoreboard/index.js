import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { initializePage } from "./ScoreboardState";

function mapStateToProps(state) {
  return {
    isInitialize: state.sboard.isInitialize,
    value: state.sboard.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initializePage: value => dispatch(initializePage(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardView);
