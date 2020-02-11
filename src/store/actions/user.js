import * as actionTypes from "./actionTypes";
import axios from "../../axios";
const donationSuccess = donations => {
  return {
    type: actionTypes.DONATIONS_SUCCESS,
    donations
  };
};

const contributionSuccess = contributions => {
  return {
    type: actionTypes.CONTRIBUTIONS_SUCCESS,
    contributions
  };
};

const userError = err => {
  return {
    type: actionTypes.USER_ERROR,
    err
  };
};

export const getContributions = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const { data } = await axios.get("/causes/me");
      dispatch(contributionSuccess(data));
    } catch (err) {
      dispatch(userError(err.response ? err.response.data : err.message));
    }
  };
};

const startLoading = () => {
  return {
    type: actionTypes.FETCH_USER_LOADING
  };
};

export const getDonations = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const { data } = await axios.get("/users/me/donations");
      dispatch(donationSuccess(data));
    } catch (err) {
      dispatch(userError(err.response ? err.response.data : err.message));
    }
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};
