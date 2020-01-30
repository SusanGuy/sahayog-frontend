import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.scss";

import DropDownItem from "./dropdown-item/dropdownItem";
const DropDownMenu = () => {
  const [hidden, setHidden] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setHidden(false);
  };

  return (
    <li className=" logged-in">
      <div onClick={() => setHidden(!hidden)} ref={node} className="dropdown">
        <Link className="dropdown-link" to="/my-campaigns">
          <button className="dropdown-button">
            <img
              src="https://www.gofundme.com/profile-image/small-3d98008e17e.jpg"
              alt="Susan  Subedi"
            />
          </button>
        </Link>
        <span className="caret" />
      </div>
      {hidden && (
        <ul className="dropdown-menu">
          <DropDownItem link="/campaigns">My Campaigns</DropDownItem>
          <DropDownItem link="/donations">My Donations</DropDownItem>
          <DropDownItem link="/edit-profile">My Profile</DropDownItem>
          <DropDownItem link="/account-settings">Account Settings</DropDownItem>
        </ul>
      )}
    </li>
  );
};

export default DropDownMenu;
