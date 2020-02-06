import * as actionTypes from "./actionTypes";
import { createAlert } from "./alert";
import axios from "../../axios";
export const startCampaign = (goal, title, description, history, match) => {
  let validationErrors = {};
  if (goal === "" || goal > 5000000) {
    validationErrors.goalError = "Enter a campaign goal upto 50 lakhs!";
  }
  if (
    title === "" ||
    title.split(" ").length < 4 ||
    title.split(" ").length > 10
  ) {
    validationErrors.titleError = "Enter a title between 4 to 10 words!";
  }
  if (description === "" || description.split(" ").length < 100) {
    validationErrors.descriptionError =
      "Enter a description of atleast 100 words!";
  }

  if (Object.keys(validationErrors).length !== 0) {
    return campaignError(validationErrors);
  }
  history.push(`${match.url}/media`);

  return campaignStarted(goal, title, description);
};

export const createCampaign = (goal, title, description, image, history) => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const fd = new FormData();
      fd.append("causePhoto", image, image.name);
      fd.append("goal", goal);
      fd.append("title", title);
      fd.append("description", description);
      await axios.post("/causes", fd);
      dispatch(campaignCreated());
      history.push("/my-campaigns");
      dispatch(createAlert("Campaign Succesfully Created", "success"));
    } catch (err) {
      dispatch(campaignError(err.response ? err.response.data : err.message));
    }
  };
};

const setLoading = () => {
  return {
    type: actionTypes.SET_LOADING
  };
};

const campaignCreated = () => {
  return {
    type: actionTypes.CAMPAIGN_CREATED
  };
};

const campaignStarted = (goal, title, description) => {
  return {
    type: actionTypes.START_CAMPAIGN,
    payload: { goal, title, description }
  };
};

const campaignError = err => {
  return {
    type: actionTypes.CAMPAIGN_ERROR,
    payload: err
  };
};
