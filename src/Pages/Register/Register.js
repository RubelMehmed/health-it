import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const { handleEmailChange, handlePasswordChange, handleNameChange, handleRegister, error } = useFirebase();
    return (
        <div>
            <div className='text-center my-3'>
                <h1>Create your account</h1>
                <Container>
                  <Row>
                    <Col md>
                      <img className='img-fluid' src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
                    </Col>
                    <Col md className='my-auto'>
                      <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <div className='text-danger mb-3'>{error}</div>
                        <Button variant="primary" type="submit">
                          Create your account
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <Button variant="outline-danger">Google Sing In</Button>
            </div>
        </div>
    );
};

export default Register;