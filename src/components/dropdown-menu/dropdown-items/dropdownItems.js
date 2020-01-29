import React from "react";
import "./dropdownItems.css";
import DropDownItem from "./dropdown-item/dropdownItem";
const dropdownItems = () => {
  return (
    <ul className="dropdown-menu">
      <DropDownItem link="/campaigns">My Campaigns</DropDownItem>
      <DropDownItem link="/donations">My Donations</DropDownItem>
      <DropDownItem link="/edit-profile">My Profile</DropDownItem>
      <DropDownItem link="/account-settings">Account Settings</DropDownItem>
    </ul>
  );
};

export default dropdownItems;
