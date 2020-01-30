import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Spinner/spinner";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated) {
        return <Redirect to="/auth" />;
      }

      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(PrivateRoute);
