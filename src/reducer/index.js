export const initialState = {
  appInitialize: false,
  isAuthenticated: false,
  vacancies: [],
  stages: [],
  statistics: [],
  items: [],
  reports: [],
  error: null
}

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case "SET_VACANCIES":
      return {
        ...state,
        vacancies: action.payload
      }
    case "SET_STAGES":
      return {
        ...state,
        stages: action.payload
      }
    case "SET_STATISTICS":
      return {
        ...state,
        statistics: action.payload
      }
    case "SET_REPORT":
      return {
        ...state,
        reports: action.payload
      }
    case "SET_FORMED_DATA":
      return {
        ...state,
        appInitialize: true,
        items: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        appInitialize: true,
        error: action.payload
      }
    default:
      return state
  }
}
