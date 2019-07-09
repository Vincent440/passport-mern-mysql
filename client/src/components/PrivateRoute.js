import React from "react";
// import { withRouter } from "react-router";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => ( props.checkServerIfLoggedIn() === true  ? <Component {...props} />  : <Redirect to='/login' />)} />
);
export default PrivateRoute;