import * as actionTypes from "../actions/actionTypes";
const initialState = {
  donations: [],
  contributions: [],
  error: {},
  loading: false
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.FETCH_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DONATIONS_SUCCESS:
      return {
        ...state,
        donations: action.donations,
        error: {},
        loading: false
      };
    case actionTypes.CONTRIBUTIONS_SUCCESS:
      return {
        ...state,
        contributions: action.contributions,
        error: {},
        loading: false
      };

    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.err,
        loading: false
      };

    case actionTypes.CLEAR_USER: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userReducer;
