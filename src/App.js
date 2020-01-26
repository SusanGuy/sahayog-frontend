import React from "react";
import Navigation from "./components/navigation/navigation";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route to="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
