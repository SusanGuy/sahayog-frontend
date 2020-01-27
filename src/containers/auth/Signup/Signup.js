import React, { useState } from "react";
import Card from "../../../components/card/card";
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
  const { name, email, password, confirmPassword, error } = formData;

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

  const handleFormSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setformData({
        ...formData,
        error: "Passwords donot match!"
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
          required
          onChange={e => handleFormChange(e)}
        />

        <CustomInput
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          required
          onChange={e => handleFormChange(e)}
        />
        <CustomInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={e => handleFormChange(e)}
        />

        <CustomInput
          type="password"
          name="confirm_password"
          value={confirmPassword}
          placeholder="Confirm Password"
          required
          onChange={e => handleFormChange(e)}
        />
        {error && <ErrorBox>{error}</ErrorBox>}
        <CustomButton type="submit">Sign up to Sahayog</CustomButton>
      </form>
    </Card>
  );
};

export default Signup;
