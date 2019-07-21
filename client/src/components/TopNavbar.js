import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarButtonsBasedOnLogin from "./NavbarButtonsBasedOnLogin";
import { withRouter } from "react-router";
import ControlledNavbarLinks from "./ControlledNavbarLinks";
import UserContext from "../UserContext";

class TopNavbar extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        { ({user,getUserLogout}) => (
          <Navbar expand={user.access_id > 0 ? "md" : true } bg="dark" variant="dark">
            <ControlledNavbarLinks user={user} />
            <NavbarButtonsBasedOnLogin user={user} setAppLogout={getUserLogout} />
          </Navbar>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TopNavbar);