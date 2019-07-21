import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";
import RenderIfAccessId from "./RenderIfAccessId";

const ControlledNavbarItems = props => {
  if (props.user.access_id > 0) {
    return (
    <span>
       <Navbar.Toggle aria-controls="responsive-top-navbar" />
        <Navbar.Collapse id="responsive-top-navbar">
          <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>
          <Nav>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Dashboard
            </NavLink>
            <RenderIfAccessId user={props.user} aId="2" >
              <NavLink exact to="/manager" className="nav-link" activeClassName="active">
                Manager
              </NavLink>
            </RenderIfAccessId>
            <RenderIfAccessId user={props.user} aId="3" >
              <NavLink exact to="/admin" className="nav-link" activeClassName="active">
                Admin
              </NavLink>
            </RenderIfAccessId>
            <NavLink exact to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </Nav>  
        </Navbar.Collapse>
    </span>
    );
  } 
  else {
    return <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>;
  }
};

export default ControlledNavbarItems;