import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cause: null,
  loading: true,
  error: {}
};

const causeReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.GET_CAUSE:
      return {
        ...state,
        cause: payload,
        loading: false
      };

    case actionTypes.GET_CAUSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
};

export default causeReducer;
