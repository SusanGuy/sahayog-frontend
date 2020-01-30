import React from "react";
import Aux from "../../../hoc/Aux/aux";
import { Link } from "react-router-dom";
import "./donationCard.css";
const DonationCard = props => {
  return (
    <div className="user-card-column">
      <div className="user-card-inner">
        {props.new ? (
          <div class="new-campaign-tile">
            <div class="new-campaign-tile-body">
              <Link class="new-campaign-link" to="/create">
                <div class="new-campaign-logo"></div>
                Start new fundraiser
              </Link>
            </div>
          </div>
        ) : (
          <Aux>
            <div className="user-card-image-wrapper">
              <div className="user-card-image-wrapper-row">
                <img
                  alt=""
                  src="https://gofundme.com/mvc.php?route=campaignmanagement/getBlurredImage&amp;url=https://d2g8igdw686xgo.cloudfront.net/31608504_1532494667258286_r.jpeg"
                />
              </div>
            </div>
            <div className="main-image-container">
              <img
                alt=""
                src="https://d2g8igdw686xgo.cloudfront.net/31608504_1532494667258286_r.jpeg"
              />
            </div>
            <div className="campaign-action-tile-content">
              <div className="campaign-action-tile-title">
                Help Rachana, Atoka shooting victim
              </div>
              <div className="campaign-action-tile-info">
                $10 donated 18 months ago
              </div>
            </div>
          </Aux>
        )}
      </div>
    </div>
  );
};

export default DonationCard;
