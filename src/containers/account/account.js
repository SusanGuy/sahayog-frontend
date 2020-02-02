import React from "react";
import CustomButton from "../../components/CustomButton/customButton";
import CustomInput from "../../components/input/input";
import Label from "../../components/label/label";
import { connect } from "react-redux";
import { uploadImage, deleteImage } from "../../store/actions/auth";
import Image from "../../components/ppImage/ppImage";
import CustomActionButton from "../../components/custom-action-button/actionButton";
import Spinner from "../../components/Spinner/spinner";
import ErrorBox from "../../components/errorMessage/errorMessage";
import "./account.scss";

const account = ({ user, uploadImage, loading, deleteImage, error }) => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-row">
        <form>
          <Label>Full Name</Label>
          <div className="account-settings-input">
            <div className="input-row">
              <div className="input-column">
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  value="Susan"
                  disabled
                />
              </div>
              <div className="input-column">
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  value="Subedi"
                  disabled
                />
              </div>
            </div>
          </div>
          <Label>Photo</Label>
          <div className="account-settings-photo">
            <div className="account-settings-avatar">
              <span className="over-image">
                <i className="fas fa-upload"></i>
              </span>
              {loading ? (
                <Spinner
                  position="absolute"
                  bottom="-20px"
                  left="32px"
                  width="2rem"
                  height="2rem"
                />
              ) : (
                <Image
                  name={user ? user.name : "user's image"}
                  avatar={user && user.avatar ? user.avatar : null}
                />
              )}
              <input
                type="file"
                onChange={e => uploadImage(e.target.files[0])}
                name="upload"
                className="file-upload"
                accept="image/*"
              />
            </div>
            {user && user.avatar && (
              <CustomActionButton
                remove
                onClick={e => {
                  e.preventDefault();
                  deleteImage();
                }}
              >
                Remove
              </CustomActionButton>
            )}
          </div>
          {error.errorMessage && <ErrorBox>{error.errorMessage}!</ErrorBox>}
          <Label>Email</Label>
          <div className="account-settings-input settings-input-email">
            <CustomInput
              type="email"
              placeholder="Email"
              value="susansubedi34@gmail.com"
            />
          </div>
          <Label>Password</Label>
          <div className="account-settings-password">
            <CustomActionButton>Change</CustomActionButton>
          </div>
          <div className="dotted-line"></div>
          <div className="delete-account-row">
            <div className="delete-account-description">
              Deleting your account will remove all of your activity and
              campaigns, and you will no longer be able to sign in with this
              account.
            </div>
            <div className="delete-account-button">
              <CustomActionButton remove>Delete Account</CustomActionButton>
            </div>
          </div>
          <div className="save-changes-button">
            <CustomButton type="submit" width="50%">
              Save Changes
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    user: state.auth.user,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { uploadImage, deleteImage })(account);
