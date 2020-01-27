import React from "react";
import Header from "../card-header/cardHeader";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/customButton";
import Aux from "../../hoc/Aux/aux";
import "./card.css";
const card = ({ type, children }) => {
  return (
    <Aux>
      <Header title={type === "signin" ? "Sign in" : "Sign up"} />
      <div className="main-auth-container">
        <CustomButton facebook="true">
          {type === "signin" ? "Continue with" : "Sign up with"} facebook
        </CustomButton>
        <div className="word-line-break">
          <span>or</span>
        </div>
        {children}
      </div>
      <div className="main-auth-footer">
        <p className="auth-footer-content">
          {type !== "signin" ? "Already have an account?" : "Not a member?"}{" "}
          <Link to={type === "signin" ? "/auth/signup" : "/auth/"}>
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </Aux>
  );
};

export default card;
