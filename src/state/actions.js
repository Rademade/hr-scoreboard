import * as actionTypes from "./actionTypes"

export const startSync = () => ({
  type: actionTypes.START_SYNC
})

export const endSync = () => ({
  type: actionTypes.END_SYNC
})

export const setFirstLaunch = payload => ({
  type: actionTypes.SET_FIRST_LAUNCH,
  payload
})

export const setAuthStatus = payload => ({
  type: actionTypes.SET_AUTH_STATUS,
  payload
})

export const setUserData = payload => ({
  type: actionTypes.SET_USER_DATA,
  payload
})

export const setVacancies = payload => ({
  type: actionTypes.SET_VACANCIES,
  payload
})