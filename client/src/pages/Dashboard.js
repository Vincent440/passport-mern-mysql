import React from "react";

class Dashboard extends React.Component {

    render() {
        return(
            <h1>Dashboard Page! Welcome! :) {this.props.user.username || "User"} </h1>
        );
    }
}
export default Dashboard;