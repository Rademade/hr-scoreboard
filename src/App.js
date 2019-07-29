import React, { useEffect, useReducer, createContext } from "react";
// import moment from "moment";
import axios from "axios";
import { appReducer, initialState } from "./reducer";
// import { apiRequest, fetchLoop, formData, formPersonsArray } from "./utils";
import Scoreboard from "./components/Scoreboard";

export const AppStateContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log("app state", state);

  useEffect(() => {
    async function login() {
      try {
        const response = await axios.get("/api/auth");
        if (response.data.status === "error") throw response.data.message;
        console.log("auth response", response);
        dispatch({ type: "SET_USER", payload: response.data.object });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    login();
  }, []);

  useEffect(() => {
    async function fetchVacancies() {
      try {
        const response = await axios.get("/api/vacancies");
        console.log("vacancies response", response);
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
        const response = await axios.get("/api/interviewState");
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

  // useEffect(() => {
  //   async function fetchStatisticsLoop() {
  //     try {
  //       const response = await axios.get("/api/statistics");
  //       dispatch({ type: "SET_STATISTICS", payload: response.data });
  //     } catch (error) {
  //       dispatch({ type: "SET_ERROR", payload: error });
  //     }
  //   }
  //   if (state.vacancies.length > 0) {
  //     fetchStatisticsLoop();
  //   }
  // }, [state.vacancies]);

  // useEffect(() => {
  //   async function fetchWeekReport() {
  //     try {
  //       const response = await axios.get("/api/performance");
  //       dispatch({ type: "SET_REPORT", payload: response });
  //     } catch (error) {
  //       dispatch({ type: "SET_ERROR", payload: error });
  //     }
  //   }
  //   if (state.vacancies.length > 0) {
  //     fetchWeekReport();
  //   }
  // }, [state.vacancies]);

  // const { vacancies, stages, statistics, reports } = state;
  // useEffect(() => {
  //   if (
  //     vacancies.length > 0 &&
  //     stages.length > 0 &&
  //     statistics.length > 0 &&
  //     reports.length > 0
  //   ) {
  //     const formedData = formData(vacancies, stages, statistics, reports);
  //     dispatch({ type: "SET_FORMED_DATA", payload: formedData });
  //   }
  // }, [vacancies, stages, statistics, reports]);

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
}

export default App;
