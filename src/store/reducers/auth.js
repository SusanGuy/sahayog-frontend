import * as actionTypes from "../actions/actionTypes";
const initialState = {
  token: null,
  user: null,
  error: "",
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
      return {
        ...state,
        loading: false,
        error: "",
        ...payload
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case actionTypes.USER_LOADED:
      return {
        ...state,
        loading: false,
        error: "",
        ...payload
      };

    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};

export default authReducer;
