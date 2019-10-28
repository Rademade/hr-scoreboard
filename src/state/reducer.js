import * as actionTypes from "./actionTypes"

const initialState = {
  isFirstLaunch: true,
  isAuthenticated: false,
  isOnSync: false,
  datesRange: {
    startDate: null,
    endDate: null
  },
  customStates: null,
  vacancies: [],
  recruters: [],
  statistic: null,
  weekStatistic: null,
  generalStatistic: null,
  error: null
}

const appReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case actionTypes.START_SYNC:
      return {
        ...state,
        isOnSync: true,
        error: null
      }
    case actionTypes.END_SYNC:
      return {
        ...state,
        isOnSync: false
      }
    case actionTypes.SET_FIRST_LAUNCH:
      return {
        ...state,
        isFirstLaunch: payload
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: payload
      }
    case actionTypes.SET_DATES_RANGE:
      return {
        ...state,
        datesRange: {
          startDate: payload.startDate,
          endDate: payload.endDate
        }
      }
    case actionTypes.SET_STATES:
      return {
        ...state,
        customStates: payload
      }
    case actionTypes.SET_VACANCIES:
      return {
        ...state,
        vacancies: payload
      }
    case actionTypes.SET_RECRUTERS:
      return {
        ...state,
        recruters: payload
      }
    case actionTypes.SET_STATISCTIC:
      return {
        ...state,
        statistic: payload
      }
    case actionTypes.SET_WEEK_STATISTIC:
      return {
        ...state,
        weekStatistic: payload
      }
    case actionTypes.SET_GENERAL_STATISTIC:
      return {
        ...state,
        generalStatistic: payload
      }
    default:
      return state
  }
}

export default appReducer
