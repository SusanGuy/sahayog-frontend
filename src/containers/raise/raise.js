import React from "react";
import CustomButton from "../../components/CustomButton/customButton";
import CustomInput from "../../components/input/input";
import CustomActionButton from "../../components/custom-action-button/actionButton";
import "./raise.css";
const raise = () => {
  return (
    <div className="create-fundraiser-container">
      <div className="create-fundraiser-row">
        <div className="create-fundraiser-card">
          <h1 className="fundraiser-card-title">Enter your goal here</h1>
          <div className="fundraiser-amount-row">
            <div className="fundraiser-amount-column">
              <div className="amount-contain">
                <div className="currency-symbol">रू</div>

                <input
                  type="tel"
                  className="amount-input"
                  name="goal-amount"
                  value=""
                  placeholder="1000"
                />
              </div>
            </div>
          </div>
          <div className="new-fundraiser-row">
            <div className="new-fundraiser-column">
              <div className="countdown-contain">
                <CustomInput
                  type="text"
                  value=""
                  name="fund-name"
                  placeholder="Campaign title"
                />
                <div className="countdown-number">5</div>
              </div>

              <div className="countdown-contain">
                <CustomInput
                  type="text"
                  textarea
                  value=""
                  name="fund-name"
                  placeholder="Campaign Description"
                />
                <div className="countdown-number">100</div>
              </div>
              <div>
                <span className="agreement">
                  The platform is free for organizers. Transaction fee is 2.9%
                  plus $0.30 per donation. By continuing, you agree to the
                  GoFundMe <CustomActionButton>terms</CustomActionButton> and
                  acknowledge receipt of our{" "}
                  <CustomActionButton>privacy policy </CustomActionButton>
                </span>
              </div>
              <CustomButton>Next</CustomButton>
            </div>
          </div>
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

export default raise;
