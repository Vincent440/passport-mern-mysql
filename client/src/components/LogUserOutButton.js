import React from "react";
import Button from "react-bootstrap/Button";

class LogUserOutButton extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      return (
        <Button type="submit" onClick={e => this.props.setAppLogout(e)} className="btn btn-danger btn-sm p-2 m-2">
          Logout Now
        </Button>
      );
    } else {
      return null;
    }
  }
}
export default LogUserOutButton;
