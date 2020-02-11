import React from "react";
import "./customButton.css";
const customButton = ({ children, width, ...rest }) => {
  const classes = ["custom-button"];
  if (rest.facebook) {
    classes.push("facebook-button");
  }

  if (rest.twitter) {
    classes.push("twitter-button");
  }

  if (rest.khalti) {
    classes.push("khalti-button");
  }

  return (
    <button style={{ width }} className={classes.join(" ")} {...rest}>
      {rest.facebook && <i className="fab fa-facebook-f"></i>}
      {rest.twitter && <i className="fab fa-twitter"></i>}
      {children}
    </button>
  );
};

export default customButton;
