import React from "react";

class About extends React.Component {
    render() {
        return(
            <h1> Protected About Page! {this.props.user.username || "User"} </h1>
        );
    }
}
export default About;