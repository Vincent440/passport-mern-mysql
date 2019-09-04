import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../UserContext';
import CreateUser from '../components/CreateUser';
import ViewAllUsers from '../components/ViewAllUsers';

export default class AdminDashboard extends React.Component {
  state = {
    createNewUser: false,
    viewUsers: false
  }
  toggleCreateUser = () => {
    this.setState(state =>({
      createNewUser: state.createNewUser === true ? false : true }
    ));
  }
  toggleViewUsers = () => {
    this.setState(state =>({
      viewUsers: state.viewUsers === true ? false : true }
    ));
  }
  render() {
    let {createNewUser, viewUsers} = this.state;
    return (
      <UserContext.Consumer>
        { ({ user}) => (
          <Row className="text-center text-white">
            <Col xs="12">
              <h1 className="display-4"> Welcome Administrator </h1>
              <h2>{ user.username} User-ID: { user.user_id}</h2>
              <h1>Access Type:</h1>
              <h2>{ user.type}</h2>
              <h1>Access Level:</h1>
              <h2>{ user.access_id}
              </h2>
              <p> Dashboard that requires User to be logged in And Have ADMIN access / access_id = 3 </p>
              <ButtonGroup size="lg" className="mb-3" >
                <Button variant="primary" type="button" onClick={this.toggleCreateUser}>
                  { createNewUser ? "Cancel" : "Create New User"}
                </Button>
                <Button variant="success" type="button" onClick={this.toggleViewUsers}>
                  { viewUsers ? "Cancel" : "View All Users"}
                </Button>
              </ButtonGroup>
              {/* Currently buttons and form not functional, Buttons will not work with current setup testing front end connection to server. */}
              { createNewUser ? <CreateUser toggleCreateComponent={this.toggleCreateUser} /> : null} 
              { viewUsers ? <ViewAllUsers toggleViewComponent={this.toggleViewUsers} /> : null} 
            </Col>
          </Row>
        )
        }
      </UserContext.Consumer>
    );
  }
}