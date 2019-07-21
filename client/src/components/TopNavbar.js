import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarButtonsBasedOnLogin from "./NavbarButtonsBasedOnLogin";
import { withRouter } from "react-router";
import ControlledNavbarLinks from "./ControlledNavbarLinks";

class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar expand={this.props.access_id > 0 ? "md" : true } bg="dark" variant="dark">
        <ControlledNavbarLinks user={this.props.user} />
        <NavbarButtonsBasedOnLogin user={this.props.user} setAppLogout={this.props.setAppLogout} />
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);