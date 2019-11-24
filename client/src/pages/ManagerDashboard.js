import React from 'react'
import UserContext from '../UserContext'

class ManagerDashboard extends React.Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className='text-center'>
            <h1 className='display-4 text-white'>Welcome Manager</h1>
            <h2>{user.username} User-ID: {user.user_id}</h2>
            <h1 className='text-white'>Access Type:</h1>
            <h2>{user.type}</h2>
            <h1 className='text-white'>Access Level:</h1>
            <h2>{user.access_id}</h2>
            <p>Dashboard that requires User to be logged in and have MANAGER access / access_id = 2 or 3 </p>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}
export default ManagerDashboard
