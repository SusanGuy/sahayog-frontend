import * as actionTypes from "../actions/actionTypes";
const initialState = {
  donations: [],
  contributions: [],
  error: null,
  loading: true
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.DONATIONS_SUCCESS:
      return {
        ...state,
        donations: action.donations,
        error: null,
        loading: false
      };
    case actionTypes.CONTRIBUTIONS_SUCCESS:
      return {
        ...state,
        contributions: action.contributions,
        error: null,
        loading: false
      };

    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.err,
        loading: false
      };

    case actionTypes.CLEAR_USER:
      return {
        donations: [],
        contributions: [],
        error: null,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
