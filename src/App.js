import React, { useEffect } from "react";
import Auth from "./containers/auth/auth";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./components/logout/logout";
import { loadUser } from "./store/actions/auth";
import Aux from "./hoc/Aux/aux";
import Dashboard from "./containers/dashboard/dashboard";
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
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard" />
      </Aux>
    );
  } else {
    routes = (
      <Aux>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" render={() => <p>This is the home page</p>} />
        <Route path="/auth" />
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
