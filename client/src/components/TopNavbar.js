import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarButtonsBasedOnLogin from "./NavbarButtonsBasedOnLogin";
import { withRouter } from "react-router";
import ControlledNavbarLinks from "./ControlledNavbarLinks";


class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar expand={this.props.loggedIn ? "md" : true } bg="dark" variant="dark">
        <ControlledNavbarLinks loggedIn={this.props.loggedIn} />
        <NavbarButtonsBasedOnLogin loggedIn={this.props.loggedIn} user={this.props.user} setAppLogout={this.props.setAppLogout} />
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);
