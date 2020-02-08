import React from "react";
import ImageAvatar from "../../ppImage/ppImage";
import Moment from "react-moment";
import "./donation.css";
const donation = ({ avatar, amount, name, date }) => {
  return (
    <li className="o-donation-list-item">
      <div className="donation-person-info">
        <ImageAvatar avatar={avatar} small />
        <div>
          <div className="person-info-name">{name}</div>
          <div className="person-info-content">
            <ul className="donation-info-content">
              <li className="campaign-donation-amount-content">
                <span className="weight-900">Rs. {amount} </span>
              </li>
              <li className="campaign-donation-amount-content arko-class ">
                <span className="color-gray">
                  <Moment fromNow>{date}</Moment>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default donation;
