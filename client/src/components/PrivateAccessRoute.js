import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import UserContext from '../UserContext';
export const PrivateAccessRoute = ({ component: Component, aId, ...rest }) => (
  <UserContext.Consumer>
    {({ user }) => (
      <Route
        {...rest}
        render={props =>
          user.access_id >= aId ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </UserContext.Consumer>
);
PrivateAccessRoute.propTypes = {
  component : PropTypes.element.isRequired,
  location : PropTypes.object.isRequired,
  aId : PropTypes.number.isRequired
};