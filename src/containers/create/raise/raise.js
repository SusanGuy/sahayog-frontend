import React, { useState, useEffect } from "react";
import CustomButton from "../../../components/CustomButton/customButton";
import { withRouter } from "react-router-dom";
import CustomInput from "../../../components/input/input";
import CustomActionButton from "../../../components/custom-action-button/actionButton";
import { connect } from "react-redux";
import { clearErrors } from "../../../store/actions/auth";
import handleChange from "../../../regex";
import ErrorBox from "../../../components/errorMessage/errorMessage";
import { startCampaign } from "../../../store/actions/campaign";
import "./raise.css";

const Raise = ({
  history,
  match,
  startCampaign,
  error,
  clearErrors,
  loadedGoal,
  loadedTitle,
  loadedDescription,
  campaignStarted
}) => {
  const [formData, setFormData] = useState({
    goal: "",
    title: "",
    description: ""
  });
  const { goal, title, description } = formData;

  useEffect(() => {
    clearErrors();
    if (campaignStarted) {
      setFormData({
        goal: loadedGoal === 0 ? "" : loadedGoal,
        title: loadedTitle === "" ? "" : loadedTitle,
        description: loadedDescription === "" ? "" : loadedDescription
      });
    }
  }, [
    clearErrors,
    campaignStarted,
    loadedGoal,
    loadedTitle,
    loadedDescription
  ]);

  const handleNext = e => {
    e.preventDefault();
    startCampaign(goal, title, description, history, match);
  };
  return (
    <div className="create-fundraiser-container">
      <div className="create-fundraiser-row">
        <div className="create-fundraiser-card">
          <h1 className="fundraiser-card-title">Enter your goal here</h1>
          <form onSubmit={e => handleNext(e)}>
            <div className="fundraiser-amount-row">
              <div className="fundraiser-amount-column">
                <div className="amount-contain">
                  <div className="currency-symbol">रू</div>
                  <input
                    type="tel"
                    className="amount-input"
                    name="goal"
                    value={goal}
                    onChange={e => {
                      if (Object.keys(error).length !== 0) {
                        clearErrors();
                      }
                      handleChange(e, setFormData, error, formData);
                    }}
                    placeholder="1000"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="new-fundraiser-row">
              <div className="new-fundraiser-column">
                <div className="countdown-contain">
                  <CustomInput
                    type="text"
                    value={title}
                    name="title"
                    onChange={e => {
                      if (Object.keys(error).length !== 0) {
                        clearErrors();
                      }
                      handleChange(e, setFormData, error, formData);
                    }}
                    placeholder="Campaign title"
                    required
                  />
                  <div className="countdown-number"></div>
                  <ErrorBox>{error.titleError}</ErrorBox>
                </div>

                <div className="countdown-contain">
                  <CustomInput
                    type="text"
                    textarea
                    value={description}
                    name="description"
                    onChange={e => {
                      if (Object.keys(error).length !== 0) {
                        clearErrors();
                      }
                      handleChange(e, setFormData, error, formData);
                    }}
                    placeholder="Campaign Description"
                    required
                  />
                  <ErrorBox>{error.descriptionError}</ErrorBox>
                </div>
                <div>
                  <span className="agreement">
                    The platform is free for organizers. Transaction fee is 2.9%
                    plus Rs.30 per donation. By continuing, you agree to the
                    Sahayog <CustomActionButton>terms</CustomActionButton> and
                    acknowledge receipt of our{" "}
                    <CustomActionButton>privacy policy </CustomActionButton>
                  </span>
                </div>

                <CustomButton type="submit">Next</CustomButton>
              </div>
            </div>
          </form>
        </div>
        <div className="bottom-link">
          <div className="text-under-card ">
            You can make changes to your campaign at any time.
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.campaign.error,
    campaignStarted: state.campaign.campaignStarted,
    loadedGoal: state.campaign.goal,
    loadedTitle: state.campaign.title,
    loadedDescription: state.campaign.description
  };
};

export default connect(mapStateToProps, { startCampaign, clearErrors })(
  withRouter(Raise)
);
