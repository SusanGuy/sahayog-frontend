import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser } from "../../store/actions/user";
import { signout } from "../../store/actions/auth";

const Logout = ({ signout, clearUser }) => {
  useEffect(() => {
    clearUser();
    signout();
  }, [signout, clearUser]);
  return <Redirect to="/auth" />;
};

export default connect(null, { signout, clearUser })(Logout);
