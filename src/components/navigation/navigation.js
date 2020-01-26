import React from "react";
import PropTypes from "prop-types";
import "./navigation.css";

const navigation = () => {
  return (
    <div className="navigation">
      <header>
        <div className="logo"></div>
      </header>
      <nav className="main-header">
        <ul className="navigation-items">
          <li className="navigation-item">
            <a href="/home">START FUNDRAISING</a>
          </li>

          <li className="navigation-item">
            <a href="/home">HOW IT WORKS</a>
          </li>

          <li className="navigation-item">
            <a href="/home">RESOURCES</a>
          </li>

          <li className="sign-in">
            <a href="/home">SIGN IN</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

navigation.propTypes = {};

export default navigation;
