import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
    try {
      const submitForm = { email, password };
      const {
        data: { token }
      } = await axios.post("/users/login", submitForm);
      localStorage.setItem("token", token);
    } catch (err) {
      setformData({
        ...formData,
        error: err.response.data.errMessage + " !"
      });
    }
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }

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
        <CustomInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => handleFormChange(e)}
          value={password}
          required
        />
        {error && <ErrorBox>{error}</ErrorBox>}
        <CustomButton type="submit">Sign in to Sahayog</CustomButton>
      </form>
    </Card>
  );
};

export default Signin;
