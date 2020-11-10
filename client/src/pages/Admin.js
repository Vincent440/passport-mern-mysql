import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserContext from '../utils/UserContext'
import NewUserForm from '../components/NewUserForm'
import UsersCard from '../components/UsersCard'

const Admin = () => (
  <UserContext.Consumer>
    {({ user }) => (
      <>
        <Row className='text-center text-white'>
          <Col>
            <h1 className='display-4'>Administrator Dashboard</h1>
            <h2>
              {user.username} User-ID: {user.userId}
            </h2>
            <h2>Access Type: {user.type}</h2>
            <h2>Access Level: {user.accessId}</h2>
            <p>
              Dashboard that requires User to be logged in And Have ADMIN access
              / accessId = 3
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <UsersCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewUserForm />
          </Col>
        </Row>
      </>
    )}
  </UserContext.Consumer>
)

export default Admin
