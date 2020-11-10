import React from 'react'
import UserContext from '../utils/UserContext'

const Manager = () => (
  <UserContext.Consumer>
    {({ user }) => (
      <div className='text-center text-white'>
        <h1 className='display-4'>Manager Dashboard</h1>
        <h2>
          {user.username} User-ID: {user.userId}
        </h2>
        <h2>Access Type: {user.type}</h2>
        <h2>Access Level: {user.accessId}</h2>
        <p>
          Dashboard that requires User to be logged in and have MANAGER access /
          accessId = 2 or 3{' '}
        </p>
      </div>
    )}
  </UserContext.Consumer>
)

export default Manager
