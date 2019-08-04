import React from 'react';
import { NavLink } from 'react-router-dom';
import RenderIfAId from '../components/RenderIfAId';
import UserContext from '../UserContext';

class AdminDashboard extends React.Component {
  render() {
    return(
      <UserContext.Consumer>
        { ({user}) => (
          <div className="text-center">
            <h1 className="display-4 text-white">Welcome Administrator</h1>
            <h2>{user.username} User-ID: {user.user_id}</h2>
            <h1 className="text-white">Access Type:</h1>
            <h2>{user.type}</h2>
            <h1 className="text-white">Access Level:</h1>
            <h2>{user.access_id}</h2>
            <p>Dashboard that requires User to be logged in And Have ADMIN access / access_id = 3</p>
            <RenderIfAId aId={3} >
              <NavLink exact to="/admin/user/new" className="nav-link">
                Create New User
              </NavLink>
            </RenderIfAId>
          </div>
        )
        }
      </UserContext.Consumer>
    );
  }
}
export default AdminDashboard;