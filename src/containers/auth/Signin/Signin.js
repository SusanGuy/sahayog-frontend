import React, { useState, useEffect } from "react";
import Card from "../../../components/card/card";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "../../../components/Spinner/spinner";
import { login, clearErrors } from "../../../store/actions/auth";
import "./signin.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
import ErrorBox from "../../../components/errorMessage/errorMessage";
const Signin = ({ error, loading, login, clearErrors, history }) => {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

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
    login(email, password, history);
  };

  return (
    <Card type="signin">
      <form onSubmit={e => handleFormSubmit(e)}>
        <CustomInput
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={e => handleFormChange(e)}
          required
        />
        {error.emailError && <ErrorBox>{error.emailError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => handleFormChange(e)}
          value={password}
          required
        />
        {error.passwordError && <ErrorBox>{error.passwordError}!</ErrorBox>}
        <CustomButton type="submit">
          {loading ? <Spinner animation="border" /> : "Sign in to Sahayog"}
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

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(Signin)
);
