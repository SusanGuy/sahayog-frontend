import React from "react";
import "./donationCardBody.css";
import DonationCard from "./donation-card/DonationCard";
const DonationCardBody = ({ campaigns, donations, error }) => {
  let cards;
  if (campaigns) {
    cards = campaigns.map(({ images, title, _id, createdAt }) => (
      <DonationCard
        campaign
        id={_id}
        key={_id}
        image={images[0].image}
        title={title}
        created={createdAt}
      />
    ));
  } else if (donations) {
    cards = donations.map(({ cause: { title, images }, _id, amount, date }) => (
      <DonationCard
        donation
        id={_id}
        key={_id}
        image={images[0].image}
        title={title}
        amount={amount}
        created={date}
      />
    ));
  } else if (error) {
    cards = <p>{error}</p>;
  }

  return (
    <div className="user-card-container">
      <div className="user-card-row">
        <div className="user-card-body">{cards}</div>
        {campaigns && <DonationCard new />}
      </div>
    </div>
  );
};

export default DonationCardBody;
