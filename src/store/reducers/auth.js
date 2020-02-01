import * as actionTypes from "../actions/actionTypes";
const initialState = {
  token: localStorage.getItem("token"),
  user: {},
  error: {},
  loading: false
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.AUTH_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: {},
        ...payload
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case actionTypes.AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        error: {}
      };
    }

    case actionTypes.USER_LOADED:
      return {
        ...state,
        loading: false,
        error: {},
        ...payload
      };

    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: {}
      };
    default:
      return state;
  }
};

export default authReducer;
