import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
    render() {
       const {component: Component,loggedIn, ...rest} = this.props;
       const renderRoute = props => {
           if (loggedIn===true) {
              return ( <Component {...props} /> );
           }
           return ( <Redirect to="/login" /> );
       }
       return ( <Route {...rest} render={renderRoute}/> );
    }
  }

export default PrivateRoute;