import React from "react";
import CustomButton from "../../components/CustomButton/customButton";
import CustomInput from "../../components/input/input";
import Label from "../../components/label/label";
import Image from "../../components/ppImage/ppImage";
import CustomActionButton from "../../components/custom-action-button/actionButton";
import "./account.css";
const account = () => {
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
              <Image />
            </div>
            <CustomActionButton>Remove</CustomActionButton>
          </div>
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
            <CustomButton width="50%">Save Changes</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default account;
