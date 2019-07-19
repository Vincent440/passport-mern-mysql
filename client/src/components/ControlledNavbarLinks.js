import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";

const ControlledNavbarItems = props => {
  if (props.loggedIn === true) {
    return (
    <span>
       <Navbar.Toggle aria-controls="responsive-top-navbar" />
       
        <Navbar.Collapse id="responsive-top-navbar">
          <Nav>
            <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/manager" className="nav-link" activeClassName="active">
              Manager
            </NavLink>
            <NavLink exact to="/admin" className="nav-link" activeClassName="active">
              Admin
            </NavLink>
            <NavLink exact to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </Nav>  
        </Navbar.Collapse>
    </span>
    );
  } else {
    return <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>;
  }
};
export default ControlledNavbarItems;
