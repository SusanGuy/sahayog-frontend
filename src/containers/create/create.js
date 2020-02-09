import React from "react";
import Raise from "./raise/raise";
import UploadImage from "./uploadImage/uploadImage";
import { Route, Switch } from "react-router-dom";
const create = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Raise} />
      <Route exact path={`${match.path}/media`} component={UploadImage} />
    </Switch>
  );
};

export default create;
