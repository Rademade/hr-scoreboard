const INITIALIZE = "Scoreboard/Initialize";

// action creators
function initialize(value) {
  return {
    type: INITIALIZE,
    payload: { value }
  };
}

// thunk actions
export function initializePage(value) {
  // can be async
  return dispatch => {
    dispatch(initialize(value));
  };
}

const initialState = {
  isInitialize: false,
  items: [1, 2, 3, 4, 5],
  value: null
};

export default function ScoreboardStateReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialize: true,
        value: action.payload.value
      };
    default:
      return state;
  }
}
