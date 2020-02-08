import * as actionTypes from "./actionTypes";
import axios from "../../axios";
export const getDonations = id => {
  return async dispatch => {
    try {
      const { data: donations } = await axios.get(`/causes/${id}/donations`);
      dispatch(getAllDonations(donations));
    } catch (err) {
      dispatch(
        donationError(err.response ? err.response.data : err.errMessage)
      );
    }
  };
};

const getAllDonations = payload => {
  return {
    type: actionTypes.GET_DONATION,
    payload
  };
};

const donationError = payload => {
  return {
    type: actionTypes.GET_DONATION_ERROR,
    payload
  };
};
