import React from "react";
import "./input.css";
const input = ({ ...props }) => {
  const classes = ["custom-input"];
  if (props.disabled) {
    classes.push("disabled");
  }
  return (
    <div className="zoom-field-wrapper">
      <input className={classes.join(" ")} {...props} />
    </div>
  );
};

export default input;
