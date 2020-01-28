import React from "react";
import Signin from "./Signin/Signin";

import Signup from "./Signup/Signup";
import { Route, Switch, withRouter } from "react-router-dom";
import "./auth.css";
const auth = ({ match }) => {
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

export default withRouter(auth);
