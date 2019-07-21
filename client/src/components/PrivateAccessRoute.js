import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

class PrivateAccessRoute extends React.Component {
  render() {
    const { component: Component, aId, user, ...rest } = this.props;

    const renderRoute = props => {
      if (user.access_id >= aId) {
        return <Component user={user} {...props} />;
      }
      return <Redirect to="/login" />;
    };
    return <Route {...rest} render={renderRoute} />;
  }
}
export default PrivateAccessRoute;
