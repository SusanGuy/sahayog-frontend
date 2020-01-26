import React from "react";
import Card from "../../../components/card/card";
import "./signin.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
const Signin = () => {
  return (
    <Card type="signin">
      <form>
        <CustomInput
          type="email"
          name="email"
          value=""
          placeholder="Email address"
        />
        <CustomInput
          type="password"
          name="password"
          value=""
          placeholder="Password"
        />

        <CustomButton type="submit">Sign in to Sahayog</CustomButton>
      </form>
    </Card>
  );
};

export default Signin;
