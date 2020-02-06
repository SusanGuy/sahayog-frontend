import React from "react";
import "./uploadImage.css";
import { connect } from "react-redux";
import Aux from "../../../hoc/Aux/aux";
import Spinner from "../../../components/Spinner/spinner";
import { createCampaign } from "../../../store/actions/campaign";
import { withRouter, Redirect } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/customButton";
import BottomLink from "../../../components/custom-action-button/actionButton";
const uploadImage = ({
  history,
  goal,
  title,
  description,
  campaignStarted,
  createCampaign,
  loading
}) => {
  if (!campaignStarted) {
    return <Redirect to="/sahayog" />;
  }

  const uploadImageHandler = image => {
    createCampaign(goal, title, description, image, history);
  };
  return (
    <div className="image-upload-row">
      <div className="image-upload-column">
        <div className="image-main-row">
          <div className="image-main-column">
            <div className="image-main-card">
              {loading ? (
                <Spinner />
              ) : (
                <Aux>
                  <h1 className="image-main-card-title">
                    Add a cover photo or video
                  </h1>
                  <CustomButton facebook="true">
                    Select a Facebook photo
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      document.getElementById("chooseFile").click()
                    }
                  >
                    <i
                      className="fas fa-paperclip"
                      style={{
                        marginRight: "10px"
                      }}
                    ></i>
                    Upload photo
                  </CustomButton>
                  <CustomButton>
                    <i
                      className="fab fa-youtube"
                      style={{
                        marginRight: "10px"
                      }}
                    ></i>
                    Add a YouTube video
                  </CustomButton>
                  <div className="image-upload-hide">
                    <input
                      onChange={e => uploadImageHandler(e.target.files[0])}
                      type="file"
                      id="chooseFile"
                      accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp"
                    />
                  </div>
                </Aux>
              )}
            </div>

            <div className="image-upload-bottom-link">
              <div className="image-upload-text-under">
                A high-quality photo or video will help tell your story.
              </div>
              <BottomLink onClick={() => history.push("/sahayog")}>
                Go Back
              </BottomLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campaignStarted: state.campaign.campaignStarted,
    loading: state.campaign.loading,
    title: state.campaign.title,
    goal: state.campaign.goal,
    description: state.campaign.description
  };
};

export default connect(mapStateToProps, { createCampaign })(
  withRouter(uploadImage)
);
