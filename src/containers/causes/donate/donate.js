import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import handleChange from "../../../regex";
import ErrorBox from "../../../components/errorMessage/errorMessage";
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
import KhaltiCheckout from "khalti-web";
import "./donate.css";
const Donate = ({ history, match, user, createAlert }) => {
  const [formData, setFormData] = useState({
    amount: "",
    first_name: "",
    last_name: "",
    email: "",
    formError: ""
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
      email: !user ? " " : user.email,
      formError: ""
    });
  }, [user]);
  const { amount, first_name, last_name, email, formError } = formData;

  const { donationLoading, error } = donationData;

  if (donationLoading || !user) {
    return <Spinner />;
  }

  const handleDonation = async e => {
    e.preventDefault();
    if (amount === "") {
      return setFormData({
        ...formData,
        formError: "Please enter a donation amount!"
      });
    }
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

  var config = {
    publicKey: "test_public_key_5535b5e015834104bdd1b24d62e2ec02",
    productIdentity: "1234567890",
    productName: "Dragon",
    productUrl: "http://gameofthrones.wikia.com/wiki/Dragons",
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      }
    }
  };

  var checkout = new KhaltiCheckout(config);

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
              {formError && <ErrorBox>{formError}</ErrorBox>}
              <div className="donate-buttons">
                <CustomButtom>Donate</CustomButtom>
                <CustomButtom
                  onClick={e => {
                    e.preventDefault();
                    checkout.show({
                      amount: parseInt(amount) * 100
                    });
                  }}
                  khalti="true"
                >
                  Donate with Khalti
                </CustomButtom>
              </div>

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
