import React, { useEffect, useReducer, createContext } from "react";
import axios from "axios";
import { appReducer, initialState } from "./reducer";
import { formPersonsArray, formData } from "./utils";
import Scoreboard from "./components/Scoreboard";

export const AppStateContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log("app state", state);
  const { isAuthenticated, vacancies, stages, statistics, reports } = state;

  useEffect(() => {
    async function auth() {
      try {
        const response = await axios.get("/api/auth");
        console.log("FRONT AUTH", response);
        dispatch({ type: "SET_AUTH", payload: true });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    auth();
  }, []);

  useEffect(() => {
    async function fetchVacancies() {
      try {
        const response = await axios.get("/api/vacancies");
        if (response.data.status === "error") throw response.data;
        dispatch({ type: "SET_VACANCIES", payload: response.data.objects });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    if (isAuthenticated) {
      fetchVacancies();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    async function fetchStages() {
      try {
        const response = await axios.get("/api/interviewState");
        if (response.data.status === "error") throw response.data;
        dispatch({
          type: "SET_STAGES",
          payload: response.data.object.interviewStates
        });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    fetchStages();
  }, []);

  useEffect(() => {
    async function fetchStatistics() {
      try {
        let promiseArray = [];
        state.vacancies.forEach(item => {
          promiseArray.push(
            axios.post("/api/statistics", {
              id: item.vacancyId
            })
          );
        });
        const resolvedArray = await Promise.all(promiseArray);
        resolvedArray.forEach(response => {
          if (response.data.status === "error") {
            throw response.data;
          }
        });
        const result = resolvedArray.map(item => {
          const vacancyId = JSON.parse(item.config.data).id;
          const { data } = item;
          return { vacancyId, data };
        });
        dispatch({
          type: "SET_STATISTICS",
          payload: result
        });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    if (state.vacancies.length > 0) {
      fetchStatistics();
    }
  }, [state.vacancies]);

  useEffect(() => {
    async function fetchWeekReport() {
      try {
        const response = await axios.post("/api/performance", {
          personIds: formPersonsArray(state.vacancies),
          vacancyIds: state.vacancies.map(item => item.vacancyId)
        });
        if (response.data.status === "error") throw response.data;
        dispatch({
          type: "SET_REPORT",
          payload: response.data.object.entryList
        });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    }
    if (state.vacancies.length > 0) {
      fetchWeekReport();
    }
  }, [state.vacancies]);

  useEffect(() => {
    if (
      vacancies.length > 0 &&
      stages.length > 0 &&
      statistics.length > 0 &&
      reports.length > 0
    ) {
      const formedData = formData(vacancies, stages, statistics, reports);
      dispatch({ type: "SET_FORMED_DATA", payload: formedData });
    }
  }, [vacancies, stages, statistics, reports]);

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
}

export default App;
