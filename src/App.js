import React, { useEffect, useReducer, createContext } from "react";
import moment from "moment";
import { appReducer, initialState } from "./reducer";
import { apiRequest, fetchLoop, formData, formPersonsArray } from "./utils";
import Scoreboard from "./components/Scoreboard";

export const AppStateContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    async function login(nope) {
      try {
        if (nope) {
          dispatch({ type: "SET_USER", payload: { personId: 1 } });
        } else {
          const response = await apiRequest("post", "/hr/person/auth", {
            login: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_PASSWORD
          });
          dispatch({ type: "SET_USER", payload: response.object });
        }
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    login(true);
  }, []);

  useEffect(() => {
    async function fetchVacancies() {
      try {
        const response = await apiRequest("post", "/hr/vacancy/get", {
          page: {
            number: 0,
            count: 15
          }
        });
        dispatch({ type: "SET_VACANCIES", payload: response.objects });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    if (state.user) {
      fetchVacancies();
    }
  }, [state.user]);

  useEffect(() => {
    async function fetchStages() {
      try {
        const response = await apiRequest("get", "hr/interviewState/get");
        dispatch({
          type: "SET_STAGES",
          payload: response.object.interviewStates
        });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    if (state.user) {
      fetchStages();
    }
  }, [state.user]);

  useEffect(() => {
    async function fetchStatisticsLoop() {
      try {
        const detailsArray = await fetchLoop(
          state.vacancies,
          "/hr/stat/getVacancyInterviewDetalInfo",
          {
            withCandidatesHistory: true
          }
        );
        dispatch({ type: "SET_STATISTICS", payload: detailsArray });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    if (state.vacancies.length > 0) {
      fetchStatisticsLoop();
    }
  }, [state.vacancies]);

  useEffect(() => {
    async function fetchWeekReport() {
      try {
        const weekReport = await apiRequest(
          "post",
          "/hr/stat/getUserPerformance ",
          {
            dateRangeType: "currentWeek",
            displayWeeklyStats: false,
            from: moment()
              .startOf("day")
              .valueOf(),
            personIds: formPersonsArray(state.vacancies),
            to: moment()
              .endOf("day")
              .valueOf(),
            vacancyIds: state.vacancies.map(({ vacancyId }) => vacancyId)
          }
        );
        dispatch({ type: "SET_REPORT", payload: weekReport });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    if (state.vacancies.length > 0) {
      fetchWeekReport();
    }
  }, [state.vacancies]);

  const { vacancies, stages, statistics } = state;
  useEffect(() => {
    if (vacancies.length > 0 && stages.length > 0 && statistics.length > 0) {
      const formedData = formData(vacancies, stages, statistics);
      dispatch({ type: "SET_FORMED_DATA", payload: formedData });
    }
  }, [vacancies, stages, statistics]);
  console.log("state", state);
  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
}

export default App;
