import * as actionTypes from "./actionTypes";

export const auth = payload => ({
  type: actionTypes.AUTH,
  payload
});

export const setAuth = payload => ({
  type: actionTypes.SET_AUTH,
  payload
});

export const authPing = () => ({
  type: actionTypes.AUTH_PING
});

export const setError = payload => ({
  type: actionTypes.SET_ERROR,
  payload
});
