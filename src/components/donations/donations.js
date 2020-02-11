import React, { useEffect, useState } from "react";
import axios from "../../axios";
import ErrorBox from "../errorMessage/errorMessage";
import Spinner from "../Spinner/spinner";
import "./donations.css";
import CustomButton from "../CustomButton/customButton";
import Donation from "./donation/donation";
import AuthButton from "../authButton/authButton";
const Donations = ({ history, match, goal, id }) => {
  const [donation, setDonation] = useState({
    donations: [],
    loading: false,
    error: {}
  });

  useEffect(() => {
    const getDonations = async id => {
      try {
        setDonation({
          loading: true,
          donations: [],
          error: {}
        });
        const { data: donations } = await axios.get(`/causes/${id}/donations`);
        setDonation({
          loading: false,
          donations,
          error: {}
        });
      } catch (err) {
        setDonation({
          loading: false,
          donations: [],
          error: err.response ? err.response.data : err.errMessage
        });
      }
    };
    getDonations(id);
  }, [id]);

  const { donations, loading } = donation;

  const totalDonations = donations.reduce((total, current) => {
    return total + current.amount;
  }, 0);

  const splicedDonations = donations.filter((_, i) => i < 5);

  return (
    <div className="p-campaign-sidebar">
      {loading ? (
        <Spinner />
      ) : (
        <aside className="o-campaign-sidebar">
          <div className="o-campaign-sidebar-wrapper">
            <div className="o-campaign-sidebar-progress-meter">
              <progress
                className="a-progress-bar"
                value={(totalDonations / goal) * 100}
                max="100"
              ></progress>
              <h2 className="m-progress-meter-heading">
                Rs. {totalDonations}
                <span className="raised-title">raised of Rs. {goal} goal</span>
              </h2>
            </div>

            <CustomButton onClick={e => history.push(`${match.url}/donate`)}>
              Donate Now
            </CustomButton>
          </div>

          <div className="donations-campaign-sidebar-wrapper">
            {donations.length !== 0 && (
              <div className="donation-trending-logo">
                <strong>{donations.length} people just donated</strong>
              </div>
            )}
            <ul className="campaign-donation-container">
              {splicedDonations.length === 0 ? (
                <ErrorBox>No donations made yet ...</ErrorBox>
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
          {splicedDonations.length !== 0 && (
            <div className="see-all-button-container">
              <AuthButton>See All</AuthButton>
            </div>
          )}
        </aside>
      )}
    </div>
  );
};

export default Donations;
