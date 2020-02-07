import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Spinner from "../Spinner/spinner";
import "./donations.css";
import CustomButton from "../CustomButton/customButton";
import Donation from "./donation/donation";
import AuthButton from "../authButton/authButton";
const Donations = ({ id }) => {
  const [state, setState] = useState({
    donations: [],
    loading: true,
    err: {}
  });

  const splicedDonations = state.donations ? state.donations.splice(0, 5) : [];
  useEffect(() => {
    const getDonations = async id => {
      try {
        const { data: donations } = await axios.get(`/causes/${id}/donations`);

        setState({
          donations,
          loading: false
        });
      } catch (err) {
        setState({
          err: err.response ? err.response.data : err.errMessage,
          loading: false
        });
      }
    };
    getDonations(id);
  }, [id, splicedDonations]);

  const { loading, donations } = state;

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
            {loading && donations.length === 0 ? (
              <Spinner />
            ) : (
              splicedDonations.map(donation => (
                <Donation
                  key={donation._id}
                  avatar={donation.user.avatar}
                  amount={donation.amount}
                  name={donation.user.name}
                  date={donation.date}
                />
              ))
            )}
          </ul>
        </div>
        <div className="see-all-button-container">
          <AuthButton>See All</AuthButton>
        </div>
      </aside>
    </div>
  );
};

export default Donations;
