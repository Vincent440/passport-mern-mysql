import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import API from '../utils/API';

export default class ViewAllUsers extends React.Component {
  state = {
    users:[]
  }
  componentDidMount(){
    API.getAllUsers().then((res) => this.setState({ users: res}));
  }
  render(){
    return (
      <Row className="justify-content-center">
        <h1 className="text-center text-capitalize">Viewing All User Accounts</h1>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.username}</td>
                  <td>{user.type}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Row>
    );
  }
}