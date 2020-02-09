import React from "react";
import { withRouter } from "react-router-dom";
const donate = ({ history, match }) => {
  return <div>{match.params.id}</div>;
};

export default withRouter(donate);
