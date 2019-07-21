import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import API from "./utils/API";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import TopNavbar from "./components/TopNavbar"; //WrappedWithRouter
// import PrivateAccessRoute from "./components/PrivateAccessRoute";

class PrivateAccessRoute extends React.Component {
  render() {
    const { component: Component, loggedIn, aId, user, ...rest } = this.props;

    const renderRoute = props => {
      if ( loggedIn === true && user.access_id >= aId ) {
        return <Component loggedIn={loggedIn} user={user} {...props} />;
      }
      return <Redirect to="/login" />;
    };
    return <Route {...rest} render={renderRoute} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setAppLogin.bind(this);
    this.postLogin.bind(this);
    this.checkIfAppIsLoggedIn.bind(this);
    this.state = {
      user: {},
      loggedIn: false
    };
  }
  componentDidMount() {
    if (this.state.loggedIn === false) {
      this.checkIfAppIsLoggedIn();
    }
  }
  setAppLogin = () => {
    this.setState({
      user: {},
      loggedIn: false
    });
  };
  setAppLogout = event => {
    event.preventDefault();
    API.getLoggedOut().then(this.setAppLogin);
  };
  postLogin = userData => {
    if (userData) {
      console.log(userData);
      API.postUserLogin(userData, (err, res) => {
        if (err === true) {
          return console.log("failed to log in");
        } else if (res) {
          console.log(res);
          this.setState({ user: res.user, loggedIn: res.loggedIn });
        } else {
          console.log("Did not get a valid server response.");
        }
      });
    }
  };
  checkIfAppIsLoggedIn = () => {
    API.getLoginStatus().then(res => {
      if (res) {
        this.setState({ user: res.user, loggedIn: res.loggedIn });
      }
    });
  };
  checkServerIfLoggedIn = () => {
    API.getLoginStatus().then(res => res.loggedIn);
  };
  render() {
    let { user, loggedIn } = this.state;
    return (
      <Router>
        <div>
          <TopNavbar user={user} loggedIn={loggedIn} setAppLogout={this.setAppLogout} />
          <Container className="mx-0" fluid>
            <Switch>
              <PrivateAccessRoute strict exact path="/" aId="1" component={Dashboard} loggedIn={loggedIn} user={user} />
              <PrivateAccessRoute strict exact path="/about" aId="1" component={About} loggedIn={loggedIn} user={user} />
              <PrivateAccessRoute strict exact path="/manager" aId="2" component={ManagerDashboard} loggedIn={loggedIn} user={user} />
              <PrivateAccessRoute strict exact path="/admin" aId="3" component={AdminDashboard} loggedIn={loggedIn} user={user} />
              <Route strict exact path="/login"
                render={props => (!loggedIn ? <Login {...props} user={user} checkIfLoggedIn={this.checkIfAppIsLoggedIn} loggedIn={loggedIn} postLogin={this.postLogin} /> : <Redirect to="/" />)}
              />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
