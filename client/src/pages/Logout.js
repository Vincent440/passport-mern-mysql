import React from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";

class Logout extends React.Component {
    state={
      loggedOut:false
    }
    componentDidMount(){
      API.getLoggedOut()
      .then(()=>this.props.setAppLogin({},false))
      .then(() => this.setState({loggedOut:true}));
    }
    render(){
      if (this.state.loggedOut === true ){
        return (<Redirect to="/login" push />);
      }
      return (<h1 className="display-1 text-white bg-dark text-center p-5">Goodbye, Succesfully logged out.</h1>);
    }
};
export default Logout;