import React from "react";
import "./donationCardBody.css";
import DonationCard from "./donation-card/DonationCard";
const DonationCardBody = ({ campaigns, donations }) => {
  let cards;
  if (campaigns) {
    cards = campaigns.map();
  } else if (donations) {
    cards = donations.map();
  }

  return (
    <div className="user-card-container">
      <div className="user-card-row">
        <div className="user-card-body">{cards}</div>
        {campagins && <DonationCard new />}
      </div>
    </div>
  );
};

export default DonationCardBody;
