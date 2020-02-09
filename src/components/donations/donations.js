import React, { useEffect } from "react";
import { getDonations } from "../../store/actions/donations";
import { connect } from "react-redux";
import ErrorBox from "../errorMessage/errorMessage";
import Spinner from "../Spinner/spinner";
import "./donations.css";
import CustomButton from "../CustomButton/customButton";
import Donation from "./donation/donation";
import AuthButton from "../authButton/authButton";
const Donations = ({
  history,
  match,
  getDonations,
  goal,
  donations,
  loading,
  id
}) => {
  useEffect(() => {
    getDonations(id);
  }, [getDonations, id]);

  const totalDonations = donations.reduce((total, current) => {
    return total + current.amount;
  }, 0);

  const splicedDonations = donations.filter((_, i) => i < 5);

  return (
    <div className="p-campaign-sidebar">
      {loading && donations.length === 0 ? (
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
const mapStateToProps = state => {
  return {
    loading: state.donation.loading,
    donations: state.donation.donations
  };
};

export default connect(mapStateToProps, { getDonations })(Donations);
