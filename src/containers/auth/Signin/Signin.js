import React, { useState } from "react";
import Card from "../../../components/card/card";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { login, clearErrors } from "../../../store/actions/auth";
import "./signin.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
import ErrorBox from "../../../components/errorMessage/errorMessage";
const Signin = ({ error, loading, login, clearErrors }) => {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const handleFormChange = e => {
    if (Object.keys(error).length !== 0) {
      return clearErrors();
    }

    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    login(email, password);
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
        />
        {error.emailError && <ErrorBox>{error.emailError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => handleFormChange(e)}
          value={password}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch(login),
//     clearErrors: () => dispatch(clearErrors)
//   };
// };

export default connect(mapStateToProps, { login, clearErrors })(Signin);
