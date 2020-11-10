import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserContext from '../utils/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { postUserLogin } = useContext(UserContext)

  const isValidInput = () => {
    if (username.length < 4 || password.length < 5) {
      return false
    }
    return true
  }
  const handleSubmit = event => {
    event.preventDefault()
    postUserLogin({ username, password })
  }
  return (
    <Row className='justify-content-center'>
      <Col xs='10'>
        <h1 className='text-center display-3 text-capitalize'>
          Welcome {username ? username : 'User'}
        </h1>
        <Form
          disabled={!isValidInput()}
          onSubmit={e => handleSubmit(e)}
          className='text-center border p-3'
        >
          <Form.Row className='justify-content-center'>
            <Form.Group controlId='loginUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                size='lg'
                onChange={e => setUsername(e.target.value)}
                autoComplete='username'
                type='text'
                name='username'
                placeholder='Username'
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className='justify-content-center'>
            <Form.Group controlId='loginPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                size='lg'
                onChange={e => setPassword(e.target.value)}
                autoComplete='current-password'
                type='password'
                name='password'
                placeholder='Password'
              />
            </Form.Group>
          </Form.Row>
          <Button
            disabled={!isValidInput()}
            className='w-75 mx-auto mb-2'
            type='submit'
            size='block'
            variant='success'
          >
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
