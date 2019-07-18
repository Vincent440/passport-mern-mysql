import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import LoginLogoutLink from './LoginLogoutLink';
import { withRouter } from "react-router";

class TopNavbar extends React.Component {
  render () {
    return (
      <Navbar className="mx-0" bg="dark" variant="dark">
        <Navbar.Brand className='text-capitalize'>Mern Passport MySQL App Welcome: {this.props.user.username}</Navbar.Brand>
        <Nav className="px-2">
          <NavLink exact to="/" className="nav-link" activeClassName="active" >Dashboard</NavLink>
          <NavLink exact to="/manager" className="nav-link" activeClassName="active" >Manager Dashboard</NavLink>
          <NavLink exact to="/admin" className="nav-link" activeClassName="active" >Admin Dashboard</NavLink>
          <NavLink exact to="/about" className="nav-link" activeClassName="active" >About</NavLink>
          <LoginLogoutLink loggedIn={this.props.loggedIn} />
        </Nav>
        <h6 className="text-white text-capitalize">{this.props.loggedIn ? `Username: ${this.props.user.username} Access-Lvl: ${this.props.user.type}` : 'Please Log In.'}</h6>
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);