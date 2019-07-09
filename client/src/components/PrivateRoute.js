import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => ( props.loggedIn === true ? <Component {...props} />  : <Redirect to='/login' />)} />
);
export default PrivateRoute;