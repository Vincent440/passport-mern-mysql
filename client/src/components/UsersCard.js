import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import API from '../utils/API'

const UsersCard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    API.getAllUsers().then(users => {
      return setUsers(users)
    })
  }, [])

  return (
    <Row className='justify-content-center'>
      <h1 className='text-center text-capitalize'>Users Card</h1>
      <Table striped bordered hover variant='light'>
        <thead>
          <tr>
            <th>userId</th>
            <th>Username</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.type}</td>
              <td>
                <button type='button'>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  )
}

export default UsersCard
