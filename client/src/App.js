import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import API from './utils/API'
import Dashboard from './pages/Dashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import TopNavbar from './components/TopNavbar' // WrappedWithRouter
import UserContext from './UserContext'
/* eslint-disable no-console */
import PrivateAccessRoute from './components/PrivateAccessRoute'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.postUserLogin = userData => {
      if (userData) {
        API.postUserLogin(userData, (err, res) => {
          if (err === true) {
            return console.log('an error occurred failed to log user in.')
          }
          this.setState({ user: res.user })
        })
      }
    }
    this.getUserLogout = event => {
      event.preventDefault()
      API.getLoggedOut().then(this.getUserStatus)
    }
    this.getUserStatus = () => {
      API.getLoginStatus().then(res => {
        if (res) {
          this.setState({ user: res.user })
        }
      })
    }
    this.state = {
      user: {
        access_id: 0,
        type: 'Guest',
        user_id: 0,
        username: 'guest'
      },
      getUserStatus: this.getUserStatus,
      getUserLogout: this.getUserLogout,
      postUserLogin: this.postUserLogin
    }
  }

  componentDidMount () {
    if (this.state.user.access_id === 0) {
      this.getUserStatus()
    }
  }

  render () {
    const { user } = this.state
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          {user.access_id === 0
            ? (
              <Container className='mx-0' fluid>
                <Login />
                <Redirect to='/' />
              </Container>
            )
            : (
              <div>
                <TopNavbar />
                <Container className='mx-0' fluid>
                  <Switch>
                    <PrivateAccessRoute strict exact path='/' component={Dashboard} aId={1} />
                    <PrivateAccessRoute strict exact path='/about' component={About} aId={1} />
                    <PrivateAccessRoute strict exact path='/manager' component={ManagerDashboard} aId={2} />
                    <PrivateAccessRoute strict exact path='/admin' component={AdminDashboard} aId={3} />
                    <Route component={NoMatch} />
                  </Switch>
                </Container>
              </div>
            )}
        </Router>
      </UserContext.Provider>
    )
  }
}
export default App
