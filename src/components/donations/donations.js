import React from "react";
import "./donations.css";
import CustomButton from "../CustomButton/customButton";
import Donation from "./donation/donation";
import AuthButton from "../authButton/authButton";
const donations = () => {
  return (
    <div className="p-campaign-sidebar">
      <aside className="o-campaign-sidebar">
        <div className="o-campaign-sidebar-wrapper">
          <div className="o-campaign-sidebar-progress-meter">
            <progress
              className="a-progress-bar"
              value="68.31479999999999"
              max="100"
            ></progress>
            <h2 className="m-progress-meter-heading">
              Rs. 341,574
              <span className="raised-title">raised of Rs. 500,000 goal</span>
            </h2>
          </div>

          <CustomButton>Donate Now</CustomButton>
        </div>

        <div className="donations-campaign-sidebar-wrapper">
          <div className="donation-trending-logo">
            <strong>188 people just donated</strong>
          </div>
          <ul className="campaign-donation-container">
            <Donation />
            <Donation />
            <Donation />
            <Donation />
            <Donation />
            <Donation />
          </ul>
        </div>
        <div className="see-all-button-container">
          <AuthButton>See All</AuthButton>
        </div>
      </aside>
    </div>
  );
};

export default donations;
