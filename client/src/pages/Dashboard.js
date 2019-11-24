import React from 'react'
import RenderIfAId from '../components/RenderIfAId'
import UserContext from '../UserContext'

export default class Dashboard extends React.Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className='text-center text-white'>
            <h1 className='display-4'>Welcome {user.username}</h1>
            <h2>User-ID: {user.user_id}</h2>
            <h1>Access Type:</h1>
            <h2>{user.type}</h2>
            <h1>Access Level:</h1>
            <h2>{user.access_id}</h2>
            <p className='font-weight-bolder text-info'>Dashboard that requires User access_id &gt;= 1</p>
            <RenderIfAId aId={2}>
              <div className='border bg-dark my-3 py-2'>
                <h1>Manager Div header</h1>
                <p>this is a div that should only be viewable by Managers on the dashboard page.</p>
              </div>
            </RenderIfAId>
            <RenderIfAId aId={3}>
              <div className='border bg-dark my-3 py-3'>
                <h1>Admin Div header</h1>
                <p>this is a div that should only be viewable by Admins on the dashboard page.</p>
              </div>
            </RenderIfAId>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}
