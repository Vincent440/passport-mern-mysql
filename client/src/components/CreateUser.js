import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from '../utils/API'
export default class AdminCreateUser extends React.Component {
  constructor (props) {
    super(props)
    this.handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
    }
    this.handleSubmit = event => {
      event.preventDefault()
      if (this.isValidInput()) {
        const { username, password, access_id } = this.state
        console.log(this.state)
        if (username.length >= 4 && password.length >= 5 && (access_id > 0 || access_id <= 3)) {
          console.log('making API post Request')
          API.postNewUser(this.state).then((res) => console.log(res))
        }
        this.props.toggleCreateComponent()
      }
    }
    this.isValidInput = () => {
      if (this.state.username.length < 4 || this.state.password.length < 5) {
        return false
      } else {
        return true
      }
    }
    this.state = {
      username: '',
      password: '',
      access_id: 1
    }
  }

  render () {
    return (
      <div>
        <Row className='justify-content-center'>
          <Col xs='12' md='11' lg='10' className='border'>
            <h1 className='text-center text-capitalize'>Create User Form.</h1>
            <Form disabled={!this.isValidInput()} onSubmit={e => this.handleSubmit(e)} className='text-center p-3'>
              <Form.Row className='justify-content-center'>
                <Form.Group controlId='newUsername'>
                  <Form.Label>New User's Username</Form.Label>
                  <Form.Control size='lg' onChange={this.handleInputChange} type='text' name='username' placeholder='Username' />
                </Form.Group>
              </Form.Row>
              <Form.Row className='justify-content-center'>
                <Form.Group controlId='newPassword'>
                  <Form.Label>New User's Starting Password</Form.Label>
                  <Form.Control size='lg' onChange={this.handleInputChange} type='password' name='password' placeholder='Password' />
                </Form.Group>
              </Form.Row>
              <Form.Row className='justify-content-center'>
                <Form.Group controlId='newAId'>
                  <Form.Label>New User's Access Rights</Form.Label>
                  <Form.Control size='lg' onChange={this.handleInputChange} type='number' min='1' max='3' name='access_id' placeholder='1' />
                </Form.Group>
              </Form.Row>
              <Button disabled={!this.isValidInput()} className='w-50 mx-auto mb-2' type='submit' size='block' variant='success'>
              Create New Account
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
