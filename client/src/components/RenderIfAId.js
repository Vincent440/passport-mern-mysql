import React from 'react'
import PropTypes from 'prop-types'
import UserContext from '../UserContext'
// A function to wrap a component with that will render its children only if the user is logged in and
// has an access_id that matches the aId passed as a prop to the function.
const RenderIfAId = (props) =>
  <UserContext.Consumer>
    {
      ({ user }) => (user.access_id >= props.aId ? (
        <div>{props.children}</div>
      ) : (null)
      )
    }
  </UserContext.Consumer>
RenderIfAId.propTypes = {
  aId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
}
export default RenderIfAId
