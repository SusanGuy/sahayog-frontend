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

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};

export const getContributions = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/causes/me");

      dispatch(contributionSuccess(data));
    } catch (err) {
      dispatch(userError(err.message));
    }
  };
};

export const getDonations = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/users/me/donations");

      dispatch(donationSuccess(data));
    } catch (err) {
      dispatch(userError(err.message));
    }
  };
};
