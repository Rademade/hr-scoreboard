import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync } from "./ScoreboardState";
import { loginAsync } from "./AuthState";

function mapStateToProps({ sboard }) {
  const { data, error, isLoading } = sboard;
  let items = [];
  if (data && data.length > 0) {
    const { vacancies } = data[0];
    items.concat(vacancies.objects);
  }
  return {
    items,
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
