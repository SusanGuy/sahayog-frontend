import React, { useState, useEffect } from "react";
import Card from "../../../components/card/card";
import { signup, clearErrors } from "../../../store/actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./signup.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
import ErrorBox from "../../../components/errorMessage/errorMessage";
const Signup = ({ error, loading, signup, clearErrors, history }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const { name, email, password, confirm_password } = formData;

  useEffect(() => {
    clearErrors();
  }, [clearErrors]);

  const handleFormChange = e => {
    if (Object.keys(error).length !== 0) {
      clearErrors();
    }

    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    signup(name, email, password, confirm_password, history);
  };

  return (
    <Card type="signup">
      <form onSubmit={e => handleFormSubmit(e)}>
        <CustomInput
          type="text"
          name="name"
          value={name}
          placeholder="Full Name"
          onChange={e => handleFormChange(e)}
          required
        />
        {error.nameError && <ErrorBox>{error.nameError}!</ErrorBox>}
        <CustomInput
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          onChange={e => handleFormChange(e)}
          required
        />
        {error.emailError && <ErrorBox>{error.emailError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => handleFormChange(e)}
          required
        />
        {error.passwordError && <ErrorBox>{error.passwordError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="confirm_password"
          value={confirm_password}
          placeholder="Confirm Password"
          onChange={e => handleFormChange(e)}
          required
        />

        <CustomButton type="submit">
          {loading ? <Spinner animation="border" /> : "Sign up to Sahayog"}
        </CustomButton>
        {error.authError && <ErrorBox>{error.authError}!</ErrorBox>}
      </form>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { signup, clearErrors })(
  withRouter(Signup)
);
