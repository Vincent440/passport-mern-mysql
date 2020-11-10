import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = ({ location }) => (
  <h1 className='text-center display-1 text-white'>
    Sorry No Match Found for {location.pathname}
  </h1>
)

NoMatch.propTypes = {
  location: PropTypes.object
}

export default NoMatch
