import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from '../utils/API'

const NewUserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessId, setAccessId] = useState(0)

  const handleSubmit = event => {
    event.preventDefault()
    if (isValidInput()) {
      if (
        username.length >= 4 &&
        password.length >= 5 &&
        (accessId > 0 || accessId <= 3)
      ) {
        API.postNewUser({ username, password, accessId }).then(res =>
          console.log(res)
        )
      }
    }
  }
  const isValidInput = () => {
    if (username.length < 4 || password.length < 5) {
      return false
    }
    return true
  }

  return (
    <div>
      <Row className='justify-content-center'>
        <Col sm='11' lg='10' className='border'>
          <h1 className='text-center text-capitalize'>New User Form</h1>
          <Form
            disabled={!isValidInput()}
            onSubmit={e => handleSubmit(e)}
            className='text-center p-3'
          >
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='newUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  size='lg'
                  onChange={e => setUsername(e.target.value)}
                  type='text'
                  name='username'
                  placeholder='Username'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='newPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  size='lg'
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='new-access-id'>
                <Form.Label>Access Rights</Form.Label>

                <Form.Control
                  as='select'
                  size='lg'
                  onChange={e => setAccessId(e.target.value)}
                  name='accessId'
                  custom
                >
                  <option value='1'>Employee</option>
                  <option value='2'>Manager</option>
                  <option value='3'>Administrator</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button
              disabled={!isValidInput()}
              className='w-50 mx-auto mb-2'
              type='submit'
              size='block'
              variant='success'
            >
              Create New Account
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default NewUserForm
