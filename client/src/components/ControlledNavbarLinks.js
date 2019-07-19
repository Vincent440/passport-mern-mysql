import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const ControlledNavbarItems = props => {
  if (props.loggedIn === true) {
    return (
      <Nav className="px-2">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink exact to="/manager" className="nav-link" activeClassName="active">
          Manager Dashboard
        </NavLink>
        <NavLink exact to="/admin" className="nav-link" activeClassName="active">
          Admin Dashboard
        </NavLink>
        <NavLink exact to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </Nav>
    );
  } else {
    return null;
  }
};
export default ControlledNavbarItems;
