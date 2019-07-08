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
      this.postLogin.bind(this);
      this.state = {
      user: props.user || {},
      loggedIn:false
    }
  };
  setAppLogin = () => {
    this.setState({
      user:{},loggedIn:false
    });
  }
  setAppLogout = () =>{
    API.getLoggedOut().then(this.setAppLogin)
  }
  postLogin = (userData, done) => {
    if (userData) {
      console.log(userData);
      API.postUserLogin(userData).then(res=>{
        console.log(res);
        this.setState(()=>{
          return {user:res.user,loggedIn:res.loggedIn}
        });
      });
    }
}
  render() {
    let {user,loggedIn} = this.state;
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
            <Route path="/login" exact strict render={ props=> (!loggedIn ? (<Login {...props} user={user} loggedIn={loggedIn} postLogin={this.postLogin} />):(<Redirect to="/"/>)) }/>
            <Route path="/logout" exact strict render={ props=>(loggedIn ? (<Logout setAppLogout={this.setAppLogout} user={user} />) : (<Redirect to="/login"/>))} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  } 
}

export default App;