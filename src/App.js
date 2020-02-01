import React, { useEffect } from "react";
import Auth from "./containers/auth/auth";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/privateRoute";
import AccountSetttings from "./containers/account/account";
import { connect } from "react-redux";
import Logout from "./components/logout/logout";
import { loadUser } from "./store/actions/auth";
import Aux from "./hoc/Aux/aux";
import Campaigns from "./containers/campaigns/campaigns";
import Donations from "./containers/donations/donations";
import Navigation from "./components/navigation/navigation";

import "./App.css";

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Aux>
      <Navigation />
      <Switch>
        <PrivateRoute
          exact
          path="/account-settings"
          component={AccountSetttings}
        />
        <PrivateRoute exact path="/my-donations" component={Donations} />
        <PrivateRoute exact path="/my-campaigns" component={Campaigns} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/" render={() => <p>This is the home page</p>} />
      </Switch>
    </Aux>
  );
};

export default connect(null, { loadUser })(App);
