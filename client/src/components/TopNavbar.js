import React from "react";
import Navbar from "react-bootstrap/Navbar";
import LogUserOutButton from "./LogUserOutButton";
import { withRouter } from "react-router";
import ControlledNavbarLinks from "./ControlledNavbarLinks";

class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar className="mx-0" bg="dark" variant="dark">
        <Navbar.Brand className="text-capitalize">MERN Passport {this.props.user.username}</Navbar.Brand>
        <ControlledNavbarLinks loggedIn={this.props.loggedIn} />
        <LogUserOutButton loggedIn={this.props.loggedIn} setAppLogout={this.props.setAppLogout} />
        {this.props.loggedIn ? (
          <h6 className="text-white text-capitalize">
            Name: {this.props.user.username} Type: {this.props.user.type}
          </h6>
        ) : (
          <Navbar.Text>Log in to browse Application routes based on user's access_level.</Navbar.Text>
        )}
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);
