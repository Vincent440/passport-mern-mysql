import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import UserContext from '../utils/UserContext'
import RenderIfAId from '../utils/RenderIfAId'
import API from '../utils/API'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  const handleClick = event => {
    event.preventDefault()

    // console.log("Log out button clicked!")
    if (user.username !== '') {
      API.getLoggedOut()
        .then(res => {
          console.log(res)
          setUser(res.user)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  return (
    <Navbar expand='md' bg='dark' variant='dark'>
      <Navbar.Toggle aria-controls='responsive-top-navbar' />
      <Navbar.Collapse id='responsive-top-navbar'>
        <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>
        <Nav>
          <NavLink exact to='/' className='nav-link' activeClassName='active'>
            Dashboard
          </NavLink>
          <RenderIfAId aId={2}>
            <NavLink
              exact
              to='/manager'
              className='nav-link'
              activeClassName='active'
            >
              Manager
            </NavLink>
          </RenderIfAId>
          <RenderIfAId aId={3}>
            <NavLink
              exact
              to='/admin'
              className='nav-link'
              activeClassName='active'
            >
              Admin
            </NavLink>
          </RenderIfAId>
          <NavLink
            exact
            to='/about'
            className='nav-link'
            activeClassName='active'
          >
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <ButtonGroup size='sm' aria-label='Navbar action buttons' className='p-0'>
        <Button
          disabled
          variant='outline-light'
          className='text-capitalize px-1'
        >
          {`${user.username} `}
          <Badge pill variant='light' className='p-1'>
            {user.type}
          </Badge>
        </Button>
        <Button type='submit' onClick={e => handleClick(e)} variant='danger'>
          Log-out
        </Button>
      </ButtonGroup>
    </Navbar>
  )
}

export default withRouter(NavBar)
