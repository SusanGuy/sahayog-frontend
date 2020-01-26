import React from "react";
import NavigationItem from "./navigationItem/navigationItem";

const navigationItems = () => {
  return (
    <nav>
      <NavigationItem link="/raise" exact>
        Start FundRaising
      </NavigationItem>
      <NavigationItem link="/guide" exact>
        How it Works
      </NavigationItem>
      <NavigationItem link="/resources" exact>
        Resources
      </NavigationItem>
    </nav>
  );
};

export default navigationItems;
