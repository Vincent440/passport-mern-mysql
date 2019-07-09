import React from "react";
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
import TopNavbar from "./components/TopNavbar";//WrappedWithRouter

class PrivateRoute extends React.Component {
  render() {
     const {component: Component,loggedIn, ...rest} = this.props;
     const renderRoute = props => {
         if (loggedIn) {
            return ( <Component {...props} /> );
         }
         return ( <Redirect to="/login" /> );
     }
     return ( <Route {...rest} render={renderRoute}/> );
  }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.setAppLogin.bind(this);
      this.postLogin.bind(this);
      this.checkIfAppIsLoggedIn.bind(this);
      this.state = {
      user: props.user || {username:"user"},
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
  render() {
    let {user,loggedIn} = this.state;
    return (
      <Router>
        <Container className="m-0 px-0" fluid>
          <TopNavbar user={user} loggedIn={loggedIn} />
          <Switch>
            <Route path="/" exact strict render={props => ( (loggedIn) ? (<Dashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <PrivateRoute path="/about" exact strict component={About} loggedIn={loggedIn} user={user} />
            <Route path="/manager" exact strict render={props => ( (loggedIn) ? (<ManagerDashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            <Route path="/admin" exact strict render={props => ( (loggedIn) ? (<AdminDashboard loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>) ) } />
            {/* <Route path="/about" exact strict render={props => (loggedIn ? (<About loggedIn={loggedIn} user={user} />) : (<Redirect to="/login"/>)) } /> */}
            <Route path="/login" exact strict render={ props=> (
              !loggedIn ? ( <Login {...props} user={user} checkIfLoggedIn={this.checkIfAppIsLoggedIn} loggedIn={loggedIn} postLogin={this.postLogin} />) : ( <Redirect to="/" />)
              )
            }/>
            <Route path="/logout" exact strict render={ props=>(loggedIn ? (<Logout setAppLogout={this.setAppLogout} user={user} />) : (<Redirect to="/login"/>))} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  } 
}
export default App;