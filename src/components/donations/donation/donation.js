import React from "react";
import ImageAvatar from "../../ppImage/ppImage";
import "./donation.css";
const donation = () => {
  return (
    <li className="o-donation-list-item">
      <div className="donation-person-info">
        <ImageAvatar small />
        <div>
          <div className="person-info-name">YLHS Baseball Program</div>
          <div className="person-info-content">
            <ul className="donation-info-content">
              <li className="campaign-donation-amount-content">
                <span className="weight-900">Rs. 1,000 </span>
              </li>
              <li className="campaign-donation-amount-content arko-class ">
                <span className="color-gray">12 mins</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default donation;
