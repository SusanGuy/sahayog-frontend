import React from "react";
import withAlert from "./hoc/withAlert/withAlert";
import { Switch, Route } from "react-router-dom";
import Aux from "./hoc/Aux/aux";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <Aux>
      <Switch>
        <Route to="/"></Route>
      </Switch>
    </Aux>
  );
}

export default withAlert(App);
