import React from "react";
import { BrowserRouter as Route,Redirect} from "react-router-dom";

function UserRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={ props => false ? ( <Component {...props} /> ) : (<Redirect to="/login" />) }
    />
  );
}

export default UserRoute;