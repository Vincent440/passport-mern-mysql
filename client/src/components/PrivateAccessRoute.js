import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../UserContext'
const PrivateAccessRoute = ({ component: Component, aId, ...rest }) => (
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
          )}
      />
    )}
  </UserContext.Consumer>
)
PrivateAccessRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  aId: PropTypes.number.isRequired
}
export default PrivateAccessRoute
