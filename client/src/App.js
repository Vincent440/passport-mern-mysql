import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Container from 'react-bootstrap/Container'


class App extends Component {
  state = {
    user:{},
    loggedIn:false
  }

  logInUser = (user) => {
    this.setState({user:user})
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Container>
          <Switch>
            <Route exact path="/login" component={Login} user={this.state.user} loggedIn={this.state.loggedIn} logInUser={()=>this.logInUser} />
            <Route exact path="/" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
