import React, { useRef, useCallback, useEffect } from "react";
import "./alert.css";
const Alert = () => {
  const node = useRef();

  const handleClick = useCallback(e => {
    if (node.current.contains(e.target)) {
      return;
    }
    console.log("baira click vayo hai");
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div ref={node} className="custom-alert">
      <div className="custom-alert-row">
        <div className="custom-alert-column">
          <i className="fas fa-exclamation"></i>Please check your email &
          password or please sign in with your Facebook account
        </div>
        <button className="custom-alert-button" type="button">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Alert;
