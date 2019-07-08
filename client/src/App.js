import React from "react";
// import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import API from "./utils/API";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";
import LoginLogoutLink from "./components/LoginLogoutLink";
import UserRoute from "./components/UserRoute";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.setAppLogin.bind(this);
      this.postLogin.bind(this);
      this.checkIfAppIsLoggedIn.bind(this);
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
  setAppLogout = () => {
    API.getLoggedOut().then(this.setAppLogin);
  }
  postLogin = (userData) => {
    if (userData) {
      console.log(userData);
      API.postUserLogin(userData, (err,res) => {
        if (err === true) {
          return console.log("failed to log in");
        }
        else {
          console.log(res);
          this.setState({ user:res.user, loggedIn:res.loggedIn});
        }
      });
    }
  }
  checkIfAppIsLoggedIn = () => {
    API.getLoginStatus().then(res=>{
      this.setState({user:res.user,loggedIn:res.loggedIn});
    })
  }
  checkServerIfLoggedIn = () => {
    API.getLoginStatus().then(res=>res.loggedIn);
  }
  // Considering importing this and placing around an exported version of the navbar.
//import withRouter from "react-router";
  render() {
    let {user,loggedIn} = this.state;
    return (
      <Router>
        <Container className="m-0 px-0" fluid>
        <Navbar className="px-4 p-2 mx-0" bg="dark" variant="dark">
          <Navbar.Brand className='text-capitalize'>Mern Passport MySQL App Welcome: {user.username? (user.username) : ("User ")  }</Navbar.Brand>
          <Nav className="px-2">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/manager" className="nav-link">Manager Dashboard</Link>
            <Link to="/admin" className="nav-link">Admin Dashboard</Link>
            <Link to="/about" className="nav-link">About</Link>
            <LoginLogoutLink loggedIn={loggedIn} />
          </Nav>
          <h6 className="text-white text-capitalize">{loggedIn? `Username: ${user.username} Access-Lvl: ${user.type}` :"Please Log In."}</h6>
        </Navbar>
          <Switch>
            <Route path="/" exact strict render={props => ( (loggedIn) ? (<Dashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <UserRoute path="/about" exact strict component={About} checkServerIfLoggedIn={this.checkServerIfLoggedIn} loggedIn={loggedIn}/>
            <Route path="/manager" exact strict render={props => ( (loggedIn) ? (<ManagerDashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <Route path="/admin" exact strict render={props => ( (loggedIn) ? (<AdminDashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            {/* <Route path="/about" exact strict render={props => (loggedIn ? (<About loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>)) } /> */}
            <Route path="/login" exact strict render={ props=> (!loggedIn ? (<Login {...props} user={user} checkIfLoggedIn={this.checkIfAppIsLoggedIn} loggedIn={loggedIn} postLogin={this.postLogin} />):(<Redirect to="/"/>)) }/>
            <Route path="/logout" exact strict render={ props=>(loggedIn ? (<Logout setAppLogout={this.setAppLogout} user={user} />) : (<Redirect to="/login"/>))} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  } 
}

export default App;