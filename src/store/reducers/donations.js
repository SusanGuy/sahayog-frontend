import * as actionTypes from "../actions/actionTypes";
const initialState = {
  donations: [],
  loading: true,
  error: {}
};

const donationReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
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
    default:
      return state;
  }
};

export default donationReducer;
