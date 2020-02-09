import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomInput from "../../../components/input/input";
import CustomActionButton from "../../../components/custom-action-button/actionButton";
import CustomButtom from "../../../components/CustomButton/customButton";
import BottomLink from "../../../components/custom-action-button/actionButton";
import Label from "../../../components/label/label";
import Spinner from "../../../components/Spinner/spinner";
import CustomInputContainer from "../../../components/customInputContainer/customInputContainer";
import "./donate.css";
const Donate = ({ history, match, user, loading }) => {
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  useEffect(() => {
    setformData({
      first_name: !user ? " " : user.name.split(" ")[0],
      last_name: !user ? " " : user.name.split(" ")[1],
      email: !user ? " " : user.email
    });
  }, [user]);
  const { first_name, last_name, email } = formData;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="donate-div">
        <form>
          <div className="process-donation">
            <div className="process-header">Enter your Donation</div>

            <div className="donation-box">
              <div className="rupees-sign">Rs.</div>
              <input className="donation-amount" />
              <div className="rupees-sign zeros">.00</div>
            </div>

            <div className="donation-form">
              <div className="name-container">
                <CustomInputContainer
                  first_name={first_name}
                  last_name={last_name}
                />

                <Label>Email</Label>
                <CustomInput name="email" value={email} placeholder="Email" />
              </div>

              <hr className="custom-hr" />

              <CustomButtom>Donate</CustomButtom>

              <div className="donate-description">
                By continuing, you agree to the Sahayog{" "}
                <CustomActionButton>terms </CustomActionButton> and acknowledge
                receipt of our{" "}
                <CustomActionButton>privacy policy </CustomActionButton>.
              </div>

              <div className="go-back-link">
                <BottomLink>Go Back</BottomLink>
              </div>

              <div id="js-focus_cycler" tabindex="44"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(withRouter(Donate));
