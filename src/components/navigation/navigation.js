import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import NavigationItems from "./navigationItems/navigationItems";
const navigation = () => {
  return (
    <header className="main-header">
      <h1 className="logo">
        sahayog<span></span>
      </h1>
      <NavigationItems />
      <Link to="/auth">
        <button className="sign-in">Sign In</button>
      </Link>
    </header>
  );
};

export default navigation;
