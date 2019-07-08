import React from "react";
import {Link} from "react-router-dom";

class LoginLogoutLink extends React.Component {
  render(){
    if(this.props.loggedIn === true ) {
      return (<Link to="/logout" className="badge badge-danger m-1 py-2">Logout Now</Link>);
    }
    else {
      return (<Link to="/login" className="badge badge-success m-1 px-4 py-2 text-center">Login</Link>);
    } 
  }
}
export default LoginLogoutLink;