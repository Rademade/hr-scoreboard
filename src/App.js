import React, { useEffect, useReducer, createContext } from "react";
import axios from "axios";
import { appReducer, initialState } from "./reducer";
import { apiRequest, formData } from "./utils";
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
    login(false);
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
        const count = state.vacancies.length;
        let promiseArray = [];
        for (let i = 0; i < count; i++) {
          const item = state.vacancies[i];
          promiseArray.push(
            axios.post("/hr/stat/getVacancyInterviewDetalInfo", {
              vacancyId: item.vacancyId,
              withCandidatesHistory: true
            })
          );
        }
        const resolvedArray = await Promise.all(promiseArray);
        const detailsArray = resolvedArray
          .map(resp => ({ ...resp }))
          .map(item => {
            const vacancyId = JSON.parse(item.config.data).vacancyId;
            const { data } = item;
            return { vacancyId, data };
          });
        dispatch({ type: "SET_STATISTICS", payload: detailsArray });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    }
    if (state.vacancies.length > 0) {
      fetchStatisticsLoop();
    }
  }, [state.vacancies]);

  const { vacancies, stages, statistics } = state;
  useEffect(() => {
    if (vacancies.length > 0 && stages.length > 0 && statistics.length > 0) {
      const formedData = formData(vacancies, stages, statistics);
      dispatch({ type: "SET_FORMED_DATA", payload: formedData });
    }
  }, [vacancies, stages, statistics]);

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  );
}

export default App;
