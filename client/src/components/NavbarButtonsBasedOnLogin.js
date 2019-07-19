import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
class NavbarButtonsBasedOnLogin extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      return (
        <ButtonGroup size="sm" aria-label="Navbar action buttons">
          <Button disabled variant="outline-light" className="text-capitalize">
            {this.props.user.username} <Badge pill variant="light" className="py-1">{this.props.user.type}</Badge>
          </Button>
          <Button type="submit" onClick={e => this.props.setAppLogout(e)} variant="danger" >
            Log-out
          </Button> 
        </ButtonGroup>
      );
    } else {
      return (<Button disabled variant="warning">Log-in to view this site.</Button>);
    }
  }
}

export default NavbarButtonsBasedOnLogin;