import React, { useState } from "react";
import Card from "../../../components/card/card";
import axios from "../../../axios";
import "./signin.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
import ErrorBox from "../../../components/errorMessage/errorMessage";
const Signin = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    error: ""
  });
  const { email, password, error } = formData;

  const handleFormChange = e => {
    if (error.length !== 0) {
      return setformData({
        ...formData,
        error: ""
      });
    }
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const submitForm = { email, password };
      await axios.post("/users/login", submitForm);
    } catch (err) {
      setformData({
        ...formData,
        error: err.response.data
      });
    }
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
        <CustomButton type="submit">Sign in to Sahayog</CustomButton>
        {error.authError && <ErrorBox>{error.authError}!</ErrorBox>}
      </form>
    </Card>
  );
};

export default Signin;
