import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  campaignStarted: false,
  title: "",
  description: "",
  error: {}
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CAMPAIGN_CREATED:
      return initialState;
    case actionTypes.START_CAMPAIGN:
      return {
        ...state,
        campaignStarted: true,
        ...action.payload
      };
    case actionTypes.CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        campaignStarted: false,
        error: action.payload
      };

    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        campaignStarted: false,
        error: {}
      };
    default:
      return state;
  }
};

export default campaignReducer;
