import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const getComments = id => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const { data: donations } = await axios.get(`/causes/${id}/comments`);
      dispatch(getAllComments(donations));
    } catch (err) {
      dispatch(commentError(err.response ? err.response.data : err.errMessage));
    }
  };
};

const getAllComments = payload => {
  return {
    type: actionTypes.GET_COMMENT,
    payload
  };
};

const commentError = payload => {
  return {
    type: actionTypes.GET_COMMENT_ERROR,
    payload
  };
};

const setLoading = () => {
  return {
    type: actionTypes.SET_COMMENT_LOADING
  };
};
