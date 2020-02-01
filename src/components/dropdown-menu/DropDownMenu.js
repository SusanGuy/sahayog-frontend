import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../ppImage/ppImage";
import "./DropDownMenu.scss";

import DropDownItem from "./dropdown-item/dropdownItem";
const DropDownMenu = ({ user }) => {
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
      <div className="dropdown">
        <Link className="dropdown-link" to="/my-campaigns">
          <button className="dropdown-button">
            <Image small />
          </button>
        </Link>
        <span ref={node} onClick={() => setHidden(!hidden)} className="caret" />
      </div>
      {hidden && (
        <ul className="dropdown-menu">
          <DropDownItem link="/my-campaigns">My Campaigns</DropDownItem>
          <DropDownItem link="/my-donations">My Donations</DropDownItem>
          <DropDownItem link="/edit-profile">My Profile</DropDownItem>
          <DropDownItem link="/account-settings">Account Settings</DropDownItem>
        </ul>
      )}
    </li>
  );
};

export default DropDownMenu;
