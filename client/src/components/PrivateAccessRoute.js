import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../utils/UserContext'
const PrivateAccessRoute = ({ component: Component, aId = 0, ...rest }) => (
  <UserContext.Consumer>
    {({ user }) => (
      <Route
        {...rest}
        render={(props) =>
          user.accessId >= aId ? (
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
