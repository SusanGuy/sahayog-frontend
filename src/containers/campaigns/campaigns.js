import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContributions } from "../../store/actions/user";
import DonationCardBody from "../../components/donation-card-body/DonationCardBody";
import Spinner from "../../components/Spinner/spinner";
const Campaigns = ({ contributions, getContributions, loading, error }) => {
  useEffect(() => {
    getContributions();
  }, [getContributions]);

  if (contributions.length === 0 && loading) {
    return <Spinner />;
  }

  return <DonationCardBody campaigns={contributions} />;
};

const mapStateToProps = state => {
  return {
    contributions: state.user.contributions,
    loading: state.user.loading,
    error: state.user.error
  };
};

export default connect(mapStateToProps, { getContributions })(Campaigns);
