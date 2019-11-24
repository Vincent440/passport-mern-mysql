import React from 'react'
import PropTypes from 'prop-types'
class NoMatch extends React.Component {
  render () {
    return (
      <h1 className='text-center display-1 text-white'>Sorry No Match Found for {this.props.location.pathname}</h1>
    )
  }
}
NoMatch.propTypes = {
  location: PropTypes.object
}

export default NoMatch
