import * as actionTypes from "./actionTypes";

export const startSync = () => ({
  type: actionTypes.START_SYNC
});

export const setOnSync = payload => ({
  type: actionTypes.SET_ON_SYNC,
  payload
});

export const setAuthStatus = payload => ({
  type: actionTypes.SET_AUTH_STATUS,
  payload
});

export const setUserData = payload => ({
  type: actionTypes.SET_USER_DATA,
  payload
});

export const setVacancies = payload => ({
    type: actionTypes.SET_VACANCIES,
    payload
})
