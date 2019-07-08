import React from "react";
// import {Redirect} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Login extends React.Component {
    constructor(props) {
     super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { username: props.user.username||"", password:"", loggedIn: props.loggedIn || false }
    };
    componentDidMount(){
        this.props.checkIfLoggedIn();
    }
    isValidInput = () =>{
        if (this.state.username.length < 4 || this.state.password.length < 6){
            return false;
        }
        else{
            return true;
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.isValidInput()){
            this.props.postLogin({username:this.state.username,password:this.state.password});
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    // checkLogin = () => {
    //     if(this.state.loggedIn === true) {
    //      return <Redirect to="/" />;
    //     }
    // }
    render() {
        // this.checkLogin();
        return  (
            <Row className="justify-content-center">
                <Col xs="10">
                    <h1 className="text-center display-3 text-capitalize">Welcome { this.state.username ? this.state.username : "User" }</h1>
                    <Form onSubmit={(e)=>this.handleSubmit(e)} className="text-center border p-3">
                        <Form.Row className="justify-content-center">
                            <Form.Group controlId="loginUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control size="lg" onChange={this.handleInputChange} autoComplete="username" type="text" name="username" placeholder="Username" />
                            </Form.Group>  
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Form.Group controlId="loginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg" onChange={this.handleInputChange} autoComplete="current-password" type="password" name="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Button disabled={!this.isValidInput()} className="w-75 mx-auto mb-2" type="submit" size="block" variant="success">Login</Button>
                    </Form>
                </Col>
            </Row>
        );
    };
}

export default Login;