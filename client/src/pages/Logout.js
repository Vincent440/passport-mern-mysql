import React from "react";

class Logout extends React.Component {
    componentDidMount(){
      this.callAppLogOut();
    }
    callAppLogOut=()=>{
      this.props.setAppLogout();
    }
    render(){
      return (<h1 className="display-1 text-white bg-dark text-center p-5">Goodbye, Succesfully logged out.</h1>);
    }
}
export default Logout;