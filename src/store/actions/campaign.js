import * as actionTypes from "./actionTypes";

export const startCampaign = (goal, title, description, history, match) => {
  let validationErrors = {};
  if (goal === "" || goal > 5000000) {
    validationErrors.goalError = "Enter a campaign goal upto 50 lakhs!";
  }
  if (
    title === "" ||
    title.split(" ").length < 5 ||
    title.split(" ").length > 50
  ) {
    validationErrors.titleError = "Enter a title between 5 to 50 words!";
  }
  if (description === "" || description.split(" ").length < 100) {
    validationErrors.descriptionError =
      "Enter a description of atleast 100 words!";
  }

  if (Object.keys(validationErrors).length !== 0) {
    return campaignError(validationErrors);
  }
  history.push(`${match.url}/media`);
  return campaignStarted(title, description);
};

const campaignStarted = (title, description) => {
  return {
    type: actionTypes.START_CAMPAIGN,
    payload: { title, description }
  };
};

const campaignError = err => {
  return {
    type: actionTypes.CAMPAIGN_ERROR,
    payload: err
  };
};
