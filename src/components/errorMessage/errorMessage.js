import React from "react";

const errorMessage = ({ children }) => {
  return <div className="err">{children}</div>;
};

export default errorMessage;
