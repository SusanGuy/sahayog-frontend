import React, { useEffect } from "react";
import Auth from "./containers/auth/auth";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./components/logout/logout";
import { loadUser } from "./store/actions/auth";
import Aux from "./hoc/Aux/aux";
import Campaigns from "./containers/campaigns/campaigns";
import Donations from "./containers/donations/donations";
import Navigation from "./components/navigation/navigation";

import "./App.css";

const App = ({ loadUser, isAuthenticated }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  let routes;
  if (isAuthenticated) {
    routes = (
      <Aux>
        <Route exact path="/my-donations" component={Donations} />
        <Route exact path="/my-campaigns" component={Campaigns} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/my-campaigns" />
      </Aux>
    );
  } else {
    routes = (
      <Aux>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" render={() => <p>This is the home page</p>} />
        <Redirect to="/auth" />
      </Aux>
    );
  }

  return (
    <Aux>
      <Navigation />
      <Switch>{routes}</Switch>
    </Aux>
  );
};

const maoStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(maoStateToProps, { loadUser })(App);
