import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

class Dashboard extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
               Welcome to the Dashboard: {this.state.user.username} !
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
           <h1>This is the test dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/login">← Go to Login!</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
