import React from "react";
import Cause from "./cause/cause";
import Donate from "./donate/donate";
import PrivateRoute from "../../components/routing/privateRoute";
import Comment from "./commentAfterDonation/comment";
import { Route, Switch } from "react-router-dom";
const create = ({ match, history }) => {
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => <Cause history={history} match={match} />}
      />
      <PrivateRoute exact path={`${match.path}/donate`} component={Donate} />
      <PrivateRoute
        exact
        path={`${match.path}/donate/comment`}
        component={Comment}
      />
    </Switch>
  );
};

export default create;
