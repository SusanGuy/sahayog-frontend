import React, { useEffect } from "react";
import { connect } from "react-redux";
import DonationCardBody from "../../components/donation-card-body/DonationCardBody";
import Spinner from "../../components/Spinner/spinner";
import { getDonations } from "../../store/actions/user";
const Donations = ({ getDonations, donations, loading, error }) => {
  useEffect(() => {
    getDonations();
  }, [getDonations]);

  if (donations.length === 0 && loading) {
    return <Spinner />;
  }
  if (error.errMessage) {
    return <DonationCardBody error={error.errMessage} />;
  }
  return <DonationCardBody donations={donations} />;
};

const mapStateToProps = state => {
  return {
    donations: state.user.donations,
    loading: state.user.loading,
    error: state.user.error
  };
};

export default connect(mapStateToProps, { getDonations })(Donations);
