const initialState = {
  isInitialized: false
};

const INITIALIZE = "App/Init";

export function init() {
  return {
    type: INITIALIZE
  };
}

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true
      };

    default:
      return state;
  }
}
