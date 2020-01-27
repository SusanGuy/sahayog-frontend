import React from "react";
import Auth from "./containers/auth/auth";
import { Switch, Route } from "react-router-dom";
import Aux from "./hoc/Aux/aux";
import Dashboard from "./containers/dashboard/dashboard";
import Navigation from "./components/navigation/navigation";
import "./App.css";

function App() {
  return (
    <Aux>
      <Navigation />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" render={() => <div>HomePage</div>} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Aux>
  );
}

export default App;
