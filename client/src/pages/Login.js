import React, { useState, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserContext from '../utils/UserContext'
import API from '../utils/API'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserContext)

  // useEffect(() => {
  //   if(user.username === ''){
  //     console.log("Login.js UseEffect")
  //     API.getLoginStatus().then(response =>{
  //       console.log(response.user)
  //       setUser(response.user)
  //     }).catch(userStatusError => console.log(userStatusError))
  //   }
  // },[user.username])

  const isValidInput = () => {
    if (username.length < 4 || password.length < 5) {
      return false
    }
    return true
  }
  const handleSubmit = event => {
    event.preventDefault()
    if (user.username === "") {
      API.postUserLogin({ username, password }, (err, res) => {
        if (err === true) {
          return console.log('an error occurred failed to log user in.')
        } else {
          setUser({ user: res.user })
        }
      })
    }
    else {
      console.log('User is already logged in')
    }

  }
  return (
    <Row className='text-center '>
      <Col xs='10'>
        <h1 className='display-3 text-capitalize'>
          Welcome {username ? username : 'User'}
        </h1>
        <Form
          disabled={!isValidInput()}
          onSubmit={e => handleSubmit(e)}
          className='border p-3'
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
