import React from "react";
import Card from "../../../components/card/card";
import "./signup.css";
import CustomButton from "../../../components/CustomButton/customButton";
import CustomInput from "../../../components/input/input";
const Signup = () => {
  return (
    <Card type="signup">
      <form>
        <CustomInput
          type="text"
          name="first_name"
          value=""
          placeholder="First Name"
        />
        <CustomInput
          type="text"
          name="last_name"
          value=""
          placeholder="Last Name"
        />

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

        <CustomInput
          type="password"
          name="confirm_password"
          value=""
          placeholder="Confirm Password"
        />

        <CustomButton type="submit">Sign up to Sahayog</CustomButton>
      </form>
    </Card>
  );
};

export default Signup;
