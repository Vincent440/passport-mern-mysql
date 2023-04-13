import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import API from './utils/API'
import Dashboard from './pages/Dashboard'
import Manager from './pages/Manager'
import Admin from './pages/Admin'
import Login from './pages/Login'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import NavBar from './components/NavBar' // WrappedWithRouter
import UserContext from './utils/UserContext'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const [user, setUser] = useState({
    accessId: 0,
    type: '',
    userId: 0,
    username: ''
  })

  useEffect(() => {
    API.getLoginStatus()
      .then(res => {
        console.log(res.user)
        setUser(res.user)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='bg-secondary'>
        <Router>
          {user.accessId === 0 ? (
            <Container
              fluid='md'
            >
              <Login />
              <Redirect to='/' />
            </Container>
          ) : (
            <>
              <NavBar />
              <Container fluid='md'>
                <Switch>
                  <PrivateRoute strict exact path='/' component={Dashboard} />
                  <PrivateRoute strict exact path='/about' component={About} />
                  <PrivateRoute
                    strict
                    exact
                    path='/manager'
                    component={Manager}
                    aId={2}
                  />
                  <PrivateRoute
                    strict
                    exact
                    path='/admin'
                    component={Admin}
                    aId={3}
                  />
                  <Route component={NoMatch} />
                </Switch>
              </Container>
            </>
          )}
        </Router>
      </div>
    </UserContext.Provider>
  )
}

export default App
