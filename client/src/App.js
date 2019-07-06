import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from "./pages/Login";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  state = {
    user:{},
    loggedIn:false
  };
  
  setAppUserStatus = (user) => {
    this.setState({
      user,loggedIn: true
    });
  };
  
  render() {
    return (
      <Router>
        <Container fluid>
          <TopNav />
          <Switch>
          <Route exact path="/" render={() => (
                this.state.loggedIn ? (<Dashboard />) : (<Redirect updateLogin={()=>this.setAppUserStatus} to="/login" />)
            )} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;