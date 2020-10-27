import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserContext from '../utils/UserContext'
import CreateUser from '../components/CreateUser'
import ViewAllUsers from '../components/ViewAllUsers'

export default class AdminDashboard extends React.Component {
  state = {
    createNewUser: false,
    viewUsers: false
  }
  toggleCreateUser = () => {
    this.setState(state => ({
      createNewUser: state.createNewUser === true ? false : true
    }))
  }
  toggleViewUsers = () => {
    this.setState(state => ({
      viewUsers: state.viewUsers === true ? false : true
    }))
  }
  render () {
    let { createNewUser, viewUsers } = this.state
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Row className='text-center text-white'>
            <Col xs='12'>
              <h1 className='display-4'>Administrator Dashboard</h1>
              <h2>
                {user.username} User-ID: {user.userId}
              </h2>
              <h2>Access Type: {user.type}</h2>
              <h2>Access Level: {user.accessId}</h2>
              <p>
                {' '}
                Dashboard that requires User to be logged in And Have ADMIN
                access / accessId = 3{' '}
              </p>
              <ButtonGroup size='lg' className='mb-3'>
                <Button
                  variant='primary'
                  type='button'
                  onClick={this.toggleCreateUser}
                >
                  {createNewUser ? 'Cancel' : 'Create New User'}
                </Button>
                <Button
                  variant='success'
                  type='button'
                  onClick={this.toggleViewUsers}
                >
                  {viewUsers ? 'Cancel' : 'View All Users'}
                </Button>
              </ButtonGroup>
              {createNewUser ? (
                <CreateUser toggleCreateComponent={this.toggleCreateUser} />
              ) : null}
              {viewUsers ? (
                <ViewAllUsers toggleViewComponent={this.toggleViewUsers} />
              ) : null}
            </Col>
          </Row>
        )}
      </UserContext.Consumer>
    )
  }
}
