import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from "./pages/Login";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  state = {
    user:{},
    loggedIn:false
  };
  
  setAppUserStatus = user => {
    this.setState({
        user: user
    });
  };
  updateAppLoginState = boolean => {
      this.setState({
          loggedIn: boolean
      });
  };
  
  render() {
    return (
      <Router>
        <Container fluid>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/welcome" component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;