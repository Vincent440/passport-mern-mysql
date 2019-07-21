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
// import {PrivateAccessRoute} from "./components/PrivateAccessRoute";
import UserContext from "./UserContext";

class PrivateAccessRoute extends React.Component { 
  render() {
    const { component: Component, aId, user, ...rest } = this.props;

    const renderRoute = props => {
      if ( user.access_id >= aId ) {
        return <Component user={user} {...props} />;
      }
      return <Redirect to="/login" />;
    };
    return <Route {...rest} render={renderRoute} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.postUserLogin = userData => {
      if (userData) {
        API.postUserLogin(userData, (err, res) => {
          if (err === true) {
            return console.log("an error occurred failed to log user in.");
          } 
          this.setState({user: res.user});
        });
      }
    }
    this.getUserLogout = event => {
      event.preventDefault();
      API.getLoggedOut().then(this.getUserStatus);
    };
    this.getUserStatus = () => {
      API.getLoginStatus().then(res => {
        if (res) {
          this.setState({ user: res.user});
        }
      });
    };
    this.state = {
      user: {
        access_id: 0,
        type: "Guest",
        user_id: 0,
        username: "guest"
      },
      getUserStatus: this.getUserStatus,
      getUserLogout: this.getUserLogout,
      postUserLogin: this.postUserLogin,
    };
  }

  componentDidMount() {
    if (this.state.user.access_id === 0) {
      this.getUserStatus();
    }
  }


  render() {
    let { user } = this.state;
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          <div>
            <TopNavbar />
            <Container className="mx-0" fluid>
              <Switch>
                <PrivateAccessRoute strict exact path="/" aId="1" component={Dashboard} user={user} />
                <PrivateAccessRoute strict exact path="/about" aId="1" component={About} user={user} />
                <PrivateAccessRoute strict exact path="/manager" aId="2" component={ManagerDashboard} user={user} />
                <PrivateAccessRoute strict exact path="/admin" aId="3" component={AdminDashboard} user={user} />
                <Route strict exact path="/login"
                  render={props => ( user.access_id === 0 ? <Login {...props} user={user} checkIfLoggedIn={this.getUserStatus} postLogin={this.postUserLogin} /> : <Redirect to="/" />)}
                />
                <Route component={NoMatch} />
              </Switch>
            </Container>
          </div>
        </Router>
      </UserContext.Provider>
    );
  }
}
export default App;
