import React from "react";
import RenderIfAccessId from "../components/RenderIfAccessId";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="display-4 text-white">Welcome {this.props.user.username}</h1>
        <h2>User-ID: {this.props.user.user_id}</h2>
        <h1 className="text-white">Access Type:</h1>
        <h2>{this.props.user.type}</h2>
        <h1 className="text-white">Access Level:</h1>
        <h2>{this.props.user.access_id}</h2>
        <p>Dashboard that requires User to be logged in / access_id = 1</p>
        <RenderIfAccessId user={this.props.user} aId="2">
          <div className="border py-3">
            <h1>Manager Div header</h1>
            <p>this is a div that should only be viewable by Managers on the dashboard page.</p>
          </div>
        </RenderIfAccessId>
        <RenderIfAccessId user={this.props.user} aId="3">
          <div className="border py-3">
            <h1>Admin Div header</h1>
            <p>this is a div that should only be viewable by Admins on the dashboard page.</p>
          </div>
        </RenderIfAccessId>

      </div>
    );
  }
}
export default Dashboard;
