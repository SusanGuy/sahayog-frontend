import React from "react";
import "./spinner.css";
const spinner = props => {
  return (
    <div
      style={{
        ...props
      }}
      className="loader"
    >
      Loading...
    </div>
  );
};

export default spinner;
