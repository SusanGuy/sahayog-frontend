import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { setAuthToken } from "../../axios";

const userLoaded = (token, user) => {
  return {
    type: actionTypes.USER_LOADED,
    payload: { token, user }
  };
};

export const clearErrors = () => {
  return { type: actionTypes.CLEAR_ERRORS };
};

export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch(authStart());
      const submitForm = { email, password };
      const {
        data: { user, token }
      } = await axios.post("/users/login", submitForm);
      dispatch(authSuccess(token, user));
    } catch (err) {
      dispatch(authFail(err.response.data));
    }
  };
};

export const loadUser = () => {
  return async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      dispatch(authStart());
      const res = await axios.get("/users/me");

      dispatch(userLoaded(localStorage.token, res.data));
    } catch (err) {
      dispatch(authFail(err));
    }
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { token, user }
  };
};
const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error
  };
};

const signout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  signout();
};
