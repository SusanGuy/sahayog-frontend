import * as actionTypes from "./actionTypes";
import axios from "../../axios";
export const getCause = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/causes/${id}`);
      dispatch(causeSuccess(data));
    } catch (err) {
      dispatch(causeFailure(err.response ? err.response.data : err.message));
    }
  };
};

const causeSuccess = cause => {
  return {
    type: actionTypes.GET_CAUSE,
    payload: cause
  };
};

const causeFailure = err => {
  return {
    type: actionTypes.GET_CAUSE_ERROR,
    payload: err
  };
};
