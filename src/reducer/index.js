export const initialState = {
  appInitialize: false,
  user: null,
  vacancies: [],
  stages: [],
  statistics: [],
  events: [],
  items: [],
  error: null
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_VACANCIES":
      return {
        ...state,
        vacancies: action.payload
      };
    case "SET_STAGES":
      return {
        ...state,
        stages: action.payload
      };
    case "SET_STATISTICS":
      return {
        ...state,
        statistics: action.payload
      };
    case "SET_EVENTS":
      return {
        ...state,
        events: action.payload
      };
    case "SET_FORMED_DATA":
      return {
        ...state,
        appInitialize: true,
        items: action.payload
      };
    case "SET_ERROR":
      return {
        ...state,
        appInitialize: true,
        error: action.payload
      };
    default:
      return state;
  }
}
