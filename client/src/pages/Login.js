import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import API from "../utils/API";


class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }
    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus = () => {
        API.getLoginStatus().then(res=>{
            console.log(res)
        });
    }
    postLogin = (userData) => {
        API.postUserLogin(userData).then(res=>{
            console.log(res)
        });
    }

    render() {
        // const { redirectToReferrer } = this.state

        // if (redirectToReferrer === true) {
        //     return <Redirect to='/' />
        // }

        return (
            <Row>
                <Col>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="loginUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control autoComplete="username" type="text" name="username" placeholder="Username" />
                            </Form.Group>  
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="loginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control autoComplete="current-password" type="password" name="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" onClick={()=>this.postLogin}>Login</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default Login;