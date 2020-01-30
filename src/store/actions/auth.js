import * as actionTypes from "./actionTypes";
import axios from "../../axios";

const userLoaded = (token, user) => {
  return {
    type: actionTypes.USER_LOADED,
    payload: { token, user }
  };
};

export const clearErrors = () => {
  return { type: actionTypes.CLEAR_ERRORS };
};

export const login = (email, password, history) => {
  return async dispatch => {
    try {
      dispatch(authStart());
      const submitForm = { email, password };
      const {
        data: { user, token }
      } = await axios.post("/users/login", submitForm);
      dispatch(authSuccess(token, user));
      history.push("/my-donations");
    } catch (err) {
      dispatch(authFail(err.response.data ? err.response.data : err.message));
    }
  };
};

export const signup = (name, email, password, confirm_password, history) => {
  return async dispatch => {
    if (password !== "" && password !== confirm_password) {
      return dispatch(
        authFail({
          authError: "Passwords donot match"
        })
      );
    }
    try {
      dispatch(authStart());
      const submitForm = { name, email, password };
      const {
        data: { user, token }
      } = await axios.post("/users/signup", submitForm);
      dispatch(authSuccess(token, user));
      history.push("/my-donations");
    } catch (err) {
      dispatch(authFail(err.response.data ? err.response.data : err.message));
    }
  };
};

export const loadUser = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/users/me");

      dispatch(userLoaded(localStorage.token, data));
    } catch (err) {
      dispatch(authFail(err.response.data ? err.response.data : err.message));
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

export const signout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
