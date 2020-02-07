import React from "react";
import "./navigation.css";
import { Link, withRouter } from "react-router-dom";
import AuthButton from "../authButton/authButton";
import { connect } from "react-redux";
import NavigationItems from "./navigationItems/navigationItems";

const navigation = ({ isAuthenticated, history }) => {
  return (
    <header className="main-header">
      <h1
        onClick={() => history.push(!isAuthenticated ? "/" : "/dashboard")}
        className="logo"
      >
        sahayog<span></span>
      </h1>
      <NavigationItems isAuthenticated={isAuthenticated} />
      {!isAuthenticated ? (
        <Link to="/auth">
          <AuthButton>Sign In</AuthButton>
        </Link>
      ) : (
        <Link to="/logout">
          <AuthButton signout>Sign Out</AuthButton>
        </Link>
      )}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(withRouter(navigation));
