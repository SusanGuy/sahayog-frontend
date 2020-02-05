import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import DropDownMenu from "../../dropdown-menu/DropDownMenu";

const navigationItems = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavigationItem link="/sahayog" exact>
        Start FundRaising
      </NavigationItem>
      <NavigationItem link="/guide" exact>
        How it Works
      </NavigationItem>
      <NavigationItem link="/resources" exact>
        Resources
      </NavigationItem>
      {isAuthenticated && <DropDownMenu />}
    </nav>
  );
};

export default navigationItems;
