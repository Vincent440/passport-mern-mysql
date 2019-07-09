import React from "react";
// import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import API from "./utils/API";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";
// import UserRoute from "./components/UserRoute";
import PrivateRoute from "./components/PrivateRoute";
import TopNavbar from "./components/TopNavbar";
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => ( props.loggedIn === true  ? <Component {...props} />  : <Redirect to='/login' />)} />
// );

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
      this.setState({user:res.user, loggedIn:res.loggedIn});
    })
  }
  checkServerIfLoggedIn = () => {
    API.getLoginStatus().then(res => res.loggedIn);
  }
  // Considering importing this and placing around an exported version of the navbar.
  //import withRouter from "react-router";
  render() {
    let {user,loggedIn} = this.state;
    return (
      <Router>
        <Container className="m-0 px-0" fluid>
          <TopNavbar user={user} loggedIn={loggedIn} />
          <Switch>
            <Route path="/" exact strict render={props => ( (loggedIn) ? (<Dashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <PrivateRoute path="/about" exact strict component={About} checkServerIfLoggedIn={this.checkServerIfLoggedIn} loggedIn={loggedIn}/>
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