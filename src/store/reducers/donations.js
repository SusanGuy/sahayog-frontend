import * as actionTypes from "../actions/actionTypes";
const initialState = {
  donations: [],
  loading: false,
  error: {}
};

const donationReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_DONATION_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_DONATION:
      return {
        ...state,
        donations: payload,
        loading: false
      };
    case actionTypes.GET_DONATION_ERROR:
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

export default donationReducer;
