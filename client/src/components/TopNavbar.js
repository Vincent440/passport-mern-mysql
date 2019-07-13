import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import LoginLogoutLink from './LoginLogoutLink';
import { withRouter } from "react-router";

class TopNavbar extends React.Component {
  render () {
    return (
      <Navbar className="mx-0" bg="dark" variant="dark">
        <Navbar.Brand className='text-capitalize'>Mern Passport MySQL App Welcome: {this.props.user.username}</Navbar.Brand>
        <Nav className="px-2">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/manager" className="nav-link">Manager Dashboard</Link>
          <Link to="/admin" className="nav-link">Admin Dashboard</Link>
          <Link to="/about" className="nav-link">About</Link>
          <LoginLogoutLink loggedIn={this.props.loggedIn} />
        </Nav>
        <h6 className="text-white text-capitalize">{this.props.loggedIn ? `Username: ${this.props.user.username} Access-Lvl: ${this.props.user.type}` : 'Please Log In.'}</h6>
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);