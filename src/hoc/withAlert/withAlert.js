import Aux from "../Aux/aux";
import React from "react";
import Navigation from "../../components/navigation/navigation";
import Alert from "../../components/alert/alert";
const withAlert = WrappedComponent => props => (
  <Aux>
    <WrappedComponent {...props}></WrappedComponent>
  </Aux>
);

export default withAlert;
