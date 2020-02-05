import React from "react";
import "./uploadImage.css";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/customButton";
import BottomLink from "../../../components/custom-action-button/actionButton";
const uploadImage = ({ history, campaignStarted }) => {
  if (!campaignStarted) {
    return <Redirect to="/sahayog" />;
  }
  return (
    <div className="image-upload-row">
      <div className="image-upload-column">
        <div className="image-main-row">
          <div className="image-main-column">
            <div className="image-main-card">
              <h1 className="image-main-card-title">
                Add a cover photo or video
              </h1>
              <CustomButton facebook="true">
                Select a Facebook photo
              </CustomButton>
              <CustomButton
                onClick={() => document.getElementById("chooseFile").click()}
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
                  onChange={e => console.log(e.target.files[0])}
                  type="file"
                  id="chooseFile"
                  accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp"
                />
              </div>
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
    campaignStarted: state.campaign.campaignStarted
  };
};

export default connect(mapStateToProps)(withRouter(uploadImage));
