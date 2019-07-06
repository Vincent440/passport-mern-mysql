import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import API from "../utils/API";


class Login extends React.Component {
    state = {
        redirectToReferrer: false,
        username:"",
        password:""
    }
    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus = () => {
        API.getLoginStatus().then(res=>{
            console.log(res)
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.postLogin({username:this.state.username,password:this.state.password});
    }
    postLogin = (userData) => {
        console.log("Posting Login:"+userData);
        API.postUserLogin(userData).then(res=>{
            console.log(res)
        });
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render() {
        // const { redirectToReferrer } = this.state

        // if (redirectToReferrer === true) {
        //     return <Redirect to='/' />
        // }

        return (
            <Row className="justify-content-center">
                <Col xs="8">
                    <Form onSubmit={(e)=>this.handleSubmit(e)} className="text-center border">
                        <Form.Row className="justify-content-center">
                            <Form.Group controlId="loginUsername">
                                <Form.Label>Username: {this.state.username}</Form.Label>
                                <Form.Control onChange={this.handleInputChange} autoComplete="username" type="text" name="username" placeholder="Username" />
                            </Form.Group>  
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Form.Group controlId="loginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} autoComplete="current-password" type="password" name="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" size="block" variant="primary">Login</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default Login;