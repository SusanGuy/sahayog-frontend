import React, { useState } from "react";
import Card from "../../../components/card/card";
import axios from "axios";
import "./signup.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
import ErrorBox from "../../../components/errorMessage/errorMessage";
const Signup = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    error: ""
  });
  const { name, email, password, confirm_password, error } = formData;

  const handleFormChange = e => {
    if (error) {
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
    if (password !== "" && password !== confirm_password) {
      return setformData({
        ...formData,
        error: {
          authError: "Passwords donot match"
        }
      });
    }
    try {
      const submitForm = { name, email, password };
      await axios.post("/users/signup", submitForm);
    } catch (err) {
      setformData({
        ...formData,
        error: err.response.data
      });
    }
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
        />
        {error.nameError && <ErrorBox>{error.nameError}!</ErrorBox>}
        <CustomInput
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          onChange={e => handleFormChange(e)}
        />
        {error.emailError && <ErrorBox>{error.emailError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => handleFormChange(e)}
        />
        {error.passwordError && <ErrorBox>{error.passwordError}!</ErrorBox>}
        <CustomInput
          type="password"
          name="confirm_password"
          value={confirm_password}
          placeholder="Confirm Password"
          onChange={e => handleFormChange(e)}
        />

        <CustomButton type="submit">Sign up to Sahayog</CustomButton>
        {error.authError && <ErrorBox>{error.authError}!</ErrorBox>}
      </form>
    </Card>
  );
};

export default Signup;
