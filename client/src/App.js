import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import API from './utils/API'
import Dashboard from './pages/Dashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import TopNavbar from './components/TopNavbar' // WrappedWithRouter
import UserContext from './utils/UserContext'
import PrivateAccessRoute from './components/PrivateAccessRoute'

class App extends React.Component {
  constructor (props) {
    super()
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
        accessId: 0,
        type: '',
        userId: 0,
        username: ''
      },
      getUserStatus: this.getUserStatus,
      getUserLogout: this.getUserLogout,
      postUserLogin: this.postUserLogin
    }
  }

  componentDidMount () {
    if (this.state.user.accessId === 0) {
      this.getUserStatus()
    }
  }

  render () {
    const { user } = this.state
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          {user.accessId === 0 ? (
            <Container
              className='d-flex justify-content-center w-100'
              fluid='md'
            >
              <Login />
              <Redirect to='/' />
            </Container>
          ) : (
            <div>
              <TopNavbar />
              <Container className='d-flex justify-content-center' fluid='md'>
                <Switch>
                  <PrivateAccessRoute
                    strict
                    exact
                    path='/'
                    component={Dashboard}
                  />
                  <PrivateAccessRoute
                    strict
                    exact
                    path='/about'
                    component={About}
                  />
                  <PrivateAccessRoute
                    strict
                    exact
                    path='/manager'
                    component={ManagerDashboard}
                    aId={2}
                  />
                  <PrivateAccessRoute
                    strict
                    exact
                    path='/admin'
                    component={AdminDashboard}
                    aId={3}
                  />
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
