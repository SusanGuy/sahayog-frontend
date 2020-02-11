import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import handleChange from "../../../regex";
import { connect } from "react-redux";
import { createAlert } from "../../../store/actions/alert";
import { withRouter } from "react-router-dom";
import CustomInput from "../../../components/input/input";
import CustomActionButton from "../../../components/custom-action-button/actionButton";
import CustomButtom from "../../../components/CustomButton/customButton";
import BottomLink from "../../../components/custom-action-button/actionButton";
import Label from "../../../components/label/label";
import Spinner from "../../../components/Spinner/spinner";
import CustomInputContainer from "../../../components/customInputContainer/customInputContainer";
import "./donate.css";
const Donate = ({ history, match, user, createAlert }) => {
  const [formData, setFormData] = useState({
    amount: "",
    first_name: "",
    last_name: "",
    email: ""
  });

  const [donationData, setDonationData] = useState({
    donationId: "",
    donationLoading: false,
    error: {}
  });

  useEffect(() => {
    setFormData({
      amount: "",
      first_name: !user ? " " : user.name.split(" ")[0],
      last_name: !user ? " " : user.name.split(" ")[1],
      email: !user ? " " : user.email
    });
  }, [user]);
  const { amount, first_name, last_name, email } = formData;

  const { donationLoading, error } = donationData;

  if (donationLoading || !user) {
    return <Spinner />;
  }

  const handleDonation = async e => {
    e.preventDefault();
    try {
      setDonationData({
        ...donationData,
        loading: true
      });
      const {
        data: { _id }
      } = await axios.post(`/causes/donate/${match.params.id}`, { amount });
      setDonationData({
        ...donationData,
        loading: false,
        donationId: _id
      });
      createAlert("Donation Posted Succesfully", "success");
      history.push(`/my-donations/${_id}/comment`);
    } catch (err) {
      setDonationData({
        ...donationData,
        error: err.response ? err.response.data.errMessage : err.message,
        donationLoading: false
      });

      createAlert(
        err.response ? err.response.data.errMessage : err.message,
        "failure"
      );
    }
  };

  return (
    <div>
      <div className="donate-div">
        <form onSubmit={e => handleDonation(e)}>
          <div className="process-donation">
            <div className="process-header">Enter your Donation</div>

            <div className="donation-box">
              <div className="rupees-sign">Rs.</div>
              <input
                type="tel"
                className="donation-amount"
                name="amount"
                value={amount}
                onChange={e => handleChange(e, setFormData, error, formData)}
              />
              <div className="rupees-sign zeros">.00</div>
            </div>

            <div className="donation-form">
              <div className="name-container">
                <CustomInputContainer
                  first_name={first_name}
                  last_name={last_name}
                  onChange={e => handleChange(e, setFormData, error, formData)}
                />

                <Label>Email</Label>
                <CustomInput
                  name="email"
                  onChange={e => handleChange(e, setFormData, error, formData)}
                  value={email}
                  placeholder="Email"
                />
              </div>

              <hr className="custom-hr" />

              <CustomButtom type="submit">Donate</CustomButtom>

              <div className="donate-description">
                By continuing, you agree to the Sahayog{" "}
                <CustomActionButton>terms </CustomActionButton> and acknowledge
                receipt of our{" "}
                <CustomActionButton>privacy policy </CustomActionButton>
              </div>

              <div className="go-back-link">
                <BottomLink>Go Back</BottomLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { createAlert })(withRouter(Donate));
