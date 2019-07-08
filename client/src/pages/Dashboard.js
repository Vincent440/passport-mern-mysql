import React from "react";

class Dashboard extends React.Component {
    render() {
        return(
            <table className="text-center">
                <tbody>
                <tr>
                    <th>Welcome User:</th>
                    <td>{this.props.user.username}</td>
                </tr>
                <tr>
                    <th>Access Type:</th>
                    <td>{this.props.user.type}</td>
                </tr>
                <tr>
                    <th>Access Level:</th>
                    <td>{this.props.user.access_id}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}
export default Dashboard;