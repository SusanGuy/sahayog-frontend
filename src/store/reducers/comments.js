import * as actionTypes from "../actions/actionTypes";
const initialState = {
  comments: [],
  loading: false,
  error: {}
};

const commentReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_COMMENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_COMMENT:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case actionTypes.GET_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case actionTypes.AUTH_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default commentReducer;
