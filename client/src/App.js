import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import API from "./utils/API";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";
import LoginLogoutLink from "./components/LoginLogoutLink";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.setAppLogin.bind(this);
      this.state = {
      user: {},
      loggedIn:false
    }
  };
  componentDidMount(){
    API.getLoginStatus().then(res=>this.setAppLogin({user:res.user,loggedIn:res.loggedIn}));
  }
  setAppLogin = (userObject,loginBoolean) => {
    this.setState({
      user:userObject,loggedIn:loginBoolean
    });
  }
  render() {
    const {user,loggedIn} = this.state;
    return (
      <Router>
        <Container className="m-0 px-0" fluid>
        <Navbar className="p-4 mx-0" bg="dark" variant="dark">
          <Navbar.Brand className='text-capitalize'>Mern Passport MySQL App Welcome: {user.username? (user.username) : ("User ")  }</Navbar.Brand>
          <Nav className="px-2">
            <Link to="/" className="px-2">Dashboard</Link>
            <Link to="/about" className="px-2">About</Link>
            {LoginLogoutLink(loggedIn)}
          </Nav>
          <h4 className="text-white text-capitalize">{loggedIn? `Username: ${user.username} Access-Lvl: ${user.type}` :"Please Log In."}</h4>
        </Navbar>
          <Switch>            
            <Route path="/" exact strict render={props => ( (loggedIn) ? (<Dashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <Route path="/about" exact strict render={props => (loggedIn ? (<About loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>)) } />
            <Route path="/login" exact strict render={ props=> (<Login {...props} user={user} setAppLogin={this.setAppLogin} />) }/>
            <Route path="/logout" exact strict render={ props=>(loggedIn ? (<Logout setAppLogin={this.setAppLogin} user={user} />) : (<Redirect to="/login"/>))} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;