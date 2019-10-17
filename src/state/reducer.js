import * as actionTypes from "./actionTypes"

const initialState = {
  isFirstLaunch: true,
  isAuthenticated: false,
  isOnSync: false,
  startDate: null,
  endDate: null,
  userData: null,
  recruters: [],
  vacancies: null,
  interviewStates: [],
  statistics: [],
  error: null,
  mockCategories: [
    { title: "Long-List", value: 213 },
    { title: "Calling", value: 13 },
    { title: "Interview", value: 3 },
    { title: "Offer", value: 1 }
  ]
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
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: payload
      }
    case actionTypes.SET_RECRUTERS:
      return {
        ...state,
        recruters: payload
      }
    case actionTypes.SET_DATES_RANGE:
      return {
        ...state,
        startDate: payload.startDate,
        endDate: payload.endDate
      }
    case actionTypes.SET_VACANCIES:
      return {
        ...state,
        vacancies: {
          ...state.vacancies,
          [payload.personId]: payload.vacancyList
        }
      }
    case actionTypes.SET_STATISCTICS:
      return {
        ...state,
        statistics: payload
      }
    case actionTypes.SET_STATES:
      return {
        ...state,
        interviewStates: payload
      }
    default:
      return state
  }
}

export default appReducer
