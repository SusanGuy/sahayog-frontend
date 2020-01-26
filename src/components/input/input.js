import React from "react";
import "./input.css";
const input = ({ ...props }) => {
  return (
    <div className="zoom-field-wrapper">
      <input className="custom-input" {...props} />
    </div>
  );
};

export default input;
