import React from "react";
import {Link} from "react-router-dom";
const LoginLogoutLink = (loggedIn) =>{
    if(loggedIn === true ) {
      return (<Link to="/logout" className="px-2 btn btn-danger">Logout Now</Link>);
    }
    else {
      return (<Link to="/login" className="px-2 btn btn-primary">Login</Link>);
    } 
}
export default LoginLogoutLink;