import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import UserContext from '../UserContext'
import RenderIfAId from './RenderIfAId'

const TopNavbar = () => (
  <UserContext.Consumer>
    {({ user, getUserLogout }) => (
      <Navbar expand='md' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-top-navbar' />
        <Navbar.Collapse id='responsive-top-navbar'>
          <Navbar.Brand>MERN Passport MySQL</Navbar.Brand>
          <Nav>
            <NavLink exact to='/' className='nav-link' activeClassName='active'>
              Dashboard
            </NavLink>
            <RenderIfAId aId={2}>
              <NavLink exact to='/manager' className='nav-link' activeClassName='active'>
                Manager
              </NavLink>
            </RenderIfAId>
            <RenderIfAId aId={3}>
              <NavLink exact to='/admin' className='nav-link' activeClassName='active'>
                Admin
              </NavLink>
            </RenderIfAId>
            <NavLink exact to='/about' className='nav-link' activeClassName='active'>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <ButtonGroup size='sm' aria-label='Navbar action buttons' className='p-0'>
          <Button disabled variant='outline-light' className='text-capitalize px-1'>
            {user.username} <Badge pill variant='light' className='p-1'>{user.type}</Badge>
          </Button>
          <Button type='submit' onClick={e => getUserLogout(e)} variant='danger'>
            Log-out
          </Button>
        </ButtonGroup>
      </Navbar>
    )}
  </UserContext.Consumer>
)

export default withRouter(TopNavbar)
