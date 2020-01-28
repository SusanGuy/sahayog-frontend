import React from "react";
import "./navigation.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavigationItems from "./navigationItems/navigationItems";

const navigation = ({ isAuthenticated, history }) => {
  return (
    <header className="main-header">
      <h1 onClick={() => history.push("/")} className="logo">
        sahayog<span></span>
      </h1>
      <NavigationItems />
      {!isAuthenticated ? (
        <Link to="/auth">
          <button className="sign-in">Sign In</button>
        </Link>
      ) : (
        <Link to="/logout">
          <button className="sign-in">Sign Out</button>
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
