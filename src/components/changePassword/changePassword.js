import React, { useRef, useEffect } from "react";
import "./changePassword.css";
import CustomInput from "../input/input";
import { connect } from "react-redux";
import { hideModal } from "../../store/actions/ui";
import CustomButton from "../CustomButton/customButton";
const ChangePassword = ({ hideModal }) => {
  const node = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    hideModal();
  };

  return (
    <div className="password-settings-container">
      <div ref={node} className="password-change-modal">
        <div className="password-modal-header">
          <div className="overlay-header">Set your password</div>
          <button
            onClick={e => {
              e.preventDefault();
              hideModal();
            }}
            className="close-button"
          >
            +
          </button>
        </div>
        <div className="password-change-content">
          <div className="password-form-header">
            <strong>
              Be sure to choose a strong password with both letters and numbers.
            </strong>
          </div>

          <form>
            <CustomInput
              name="current_password"
              type="password"
              placeholder="Current Password"
              value=""
            />
            <CustomInput
              name="new_password"
              type="password"
              placeholder="New Password"
              value=""
            />

            <CustomInput
              name="confirm_new_password"
              type="password"
              placeholder="Confirm New Password"
              value=""
            />
            <div className="change-password-button">
              <CustomButton width="80%" type="submit">
                Save Changes
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { hideModal })(ChangePassword);
