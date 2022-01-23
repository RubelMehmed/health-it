import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { handleEmailChange, handlePasswordChange, handleLogin, handleResetPassword } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate.push(redirect_uri);
        })
      }
  



    return (
        <div className='text-center my-4'>
            <h1>Login</h1>
            <Container>
              <Row>
                <Col md>
                  <img className='img-fluid' src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
                </Col>
                <Col md className='my-auto'>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                    <Button className='mx-2' onClick={handleResetPassword} variant='secondary'>Reset Password</Button>
                  </Form>
               </Col>
              </Row>
            </Container>
            <br />
            <p>New user? <Link to='/register'>Create new account</Link> </p>
            <Button onClick={handleGoogleLogin} variant="outline-danger">Google Sing In</Button>
        </div>
    );
};

export default Login;