import React from "react";
import Signin from "./Signin/Signin";
import { connect } from "react-redux";
import Signup from "./Signup/Signup";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./auth.css";
const auth = ({ match, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/my-donations" />;
  }
  return (
    <div className="main-wrapper">
      <section className="auth-container">
        <div className="auth-content-container">
          <Switch>
            <Route exact path={match.path} component={Signin} />
            <Route exact path={`${match.path}/signup`} component={Signup} />
          </Switch>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(withRouter(auth));
