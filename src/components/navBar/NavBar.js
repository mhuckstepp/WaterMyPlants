import React from "react";
import { NavLink } from "react-router-dom";
import { signOutFunc } from "../../store/actions/loginActions";
import NavBarStyles from "./NavBarStyles";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  const dispatch = useDispatch();

  return (
    <NavBarStyles>
       <NavLink to="/profile">Profile</NavLink> 
      <NavLink to="/myplants">My Plants</NavLink>
        <NavLink to="/">
          <span onClick={() => dispatch(signOutFunc())}>Sign Out</span>
        </NavLink>
    </NavBarStyles>
  );
};

export default NavBar;
