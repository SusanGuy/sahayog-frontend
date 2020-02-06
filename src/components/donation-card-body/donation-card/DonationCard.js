import React from "react";
import Aux from "../../../hoc/Aux/aux";
import { Link } from "react-router-dom";
import moment from "moment";
import "./donationCard.css";
const DonationCard = props => {
  return (
    <div className="user-card-column">
      <div className="user-card-inner">
        {props.new ? (
          <div className="new-campaign-tile">
            <div className="new-campaign-tile-body">
              <Link className="new-campaign-link" to="/sahayog">
                <div className="new-campaign-logo"></div>
                Start new fundraiser
              </Link>
            </div>
          </div>
        ) : (
          <Aux>
            <div className="user-card-image-wrapper">
              <div className="user-card-image-wrapper-row">
                <img alt="" src={`http://localhost:3000${props.image}`} />
              </div>
            </div>
            <div className="main-image-container">
              <img alt="" src={`http://localhost:3000${props.image}`} />
            </div>
            <div className="campaign-action-tile-content">
              <div className="campaign-action-tile-title">{props.title}</div>
              <div className="campaign-action-tile-info">
                {props.campaign ? "Posted " : `Rs. ${props.amount} donated `}
                {moment(props.created).fromNow()}
              </div>
            </div>
          </Aux>
        )}
      </div>
    </div>
  );
};

export default DonationCard;
