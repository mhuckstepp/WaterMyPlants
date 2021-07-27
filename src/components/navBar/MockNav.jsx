import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyles from "./NavBarStyles";

const NavBar = (props) => {
  return (
    <NavBarStyles>
      <NavLink to="/signup">Profile</NavLink>
      <NavLink to="/signup">My Plants</NavLink>
      <NavLink to="/signup">Sign Out</NavLink>
    </NavBarStyles>
  );
};

export default NavBar;
