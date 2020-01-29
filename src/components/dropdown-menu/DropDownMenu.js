import React from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";
import DropDownItems from "./dropdown-items/dropdownItems";
const DropDownMenu = () => {
  return (
    <li className=" logged-in">
      <div className="dropdown">
        <Link className="dropdown-link" to="/my-campaigns">
          <button className="dropdown-button">
            <img
              src="https://www.gofundme.com/profile-image/small-3d98008e17e.jpg"
              alt="Susan  Subedi"
            />
          </button>
        </Link>
        <span className="caret" />
        <DropDownItems />
      </div>
    </li>
  );
};

export default DropDownMenu;
