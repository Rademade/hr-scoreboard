import { connect } from "react-redux";
import ScoreboardView from "./ScoreboardView";
import { fetchVacanciesAsync, loginAsync } from "./ScoreboardState";

function mapStateToProps({ sboard }) {
  const { data, user, error, isLoading } = sboard;
  let items = [];
  if (data && data.length > 0) {
    const { vacancies } = data[0];
    items = vacancies.objects;
  }
  return {
    items,
    user,
    error,
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVacansies: personId => dispatch(fetchVacanciesAsync(personId)),
    logIn: () => dispatch(loginAsync())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardView);
