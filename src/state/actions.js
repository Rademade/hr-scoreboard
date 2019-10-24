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

export const setDatesRange = payload => ({
  type: actionTypes.SET_DATES_RANGE,
  payload
})

export const setStates = payload => ({
  type: actionTypes.SET_STATES,
  payload
})

export const setVacancies = payload => ({
  type: actionTypes.SET_VACANCIES,
  payload
})

export const setStatistics = payload => ({
  type: actionTypes.SET_STATISCTIC,
  payload
})

export const setWeekStatistic = payload => ({
  type: actionTypes.SET_WEEK_STATISTIC,
  payload
})

export const setRecruters = payload => ({
  type: actionTypes.SET_RECRUTERS,
  payload
})

export const setError = payload => ({
  type: actionTypes.SET_ERROR,
  payload
})
