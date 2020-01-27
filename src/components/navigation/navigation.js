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
      {!localStorage.getItem("token") ? (
        <Link to="/auth">
          <button className="sign-in">Sign In</button>
        </Link>
      ) : (
        <Link to="/">
          <button
            onClick={() => localStorage.removeItem("token")}
            className="sign-in"
          >
            Sign Out
          </button>
        </Link>
      )}
    </header>
  );
};

export default navigation;
