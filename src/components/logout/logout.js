import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../store/actions/auth";
import { clearUser } from "../../store/actions/user";

const Logout = ({ signout, clearUser }) => {
  useEffect(() => {
    clearUser();
    signout();
  }, [signout, clearUser]);
  return <Redirect to="/auth" />;
};

export default connect(null, { signout, clearUser })(Logout);
