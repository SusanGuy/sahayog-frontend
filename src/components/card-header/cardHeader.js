import React from "react";
import "./cardHeader.css";
const cardHeader = ({ title }) => {
  return (
    <div className="card-header">
      <div className="heading-1">{title}</div>
    </div>
  );
};

export default cardHeader;
