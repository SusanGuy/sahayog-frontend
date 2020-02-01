import React from "react";
import "./input.css";
const input = ({ disabled, ...rest }) => {
  const classes = ["custom-input"];
  if (disabled) {
    classes.push("disabled");
  }
  return (
    <div className="zoom-field-wrapper">
      <input className={classes.join(" ")} {...rest} />
    </div>
  );
};

export default input;
