import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  campaignStarted: false,
  title: "",
  description: "",
  error: null
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default campaignReducer;
