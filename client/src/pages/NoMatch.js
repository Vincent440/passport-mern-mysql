import React from "react";

class NoMatch extends React.Component {
    render(){
        return (
            <h1>Sorry No Match Found for {this.props.location.pathname}</h1>
        );
    }
}

export default NoMatch;