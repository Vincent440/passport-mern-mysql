import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  constructor(props) {
    super(props);
    // Setting the initial values of this.state.username and this.state.password
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount(){
    API.checkLogInStatus().then(response =>{
      console.log(response);
    })
  }
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();

    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    
    API.postUserLogin({ username: this.state.username , password: this.state.password }).then(res => {
      console.log(res);
      this.setState({ user: res.data.user, username: "", password: "" });
    }).catch(err => {
      console.log(err);
      
    });
  };

  render() {
    console.log(this.props);
    return (
      <form>
        
        <h1>Welcome! to the React Mern Passport App Login</h1>
        <h3>Username: {this.state.username}</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          autoComplete="current-password"
        />
        <button onClick={this.handleFormSubmit}>Login User</button>
      </form>
    );
  }
}

export default Login;
