import React from 'react';
import { Form, Container, Button, FloatingLabel, Row, Col } from 'react-bootstrap';

const Booking = () => {
    return (
        <div className='my-3 text-center'>
            <div className='text-center'>
                <h1><span className='text-warning'>Come</span> & visit us</h1>
                <p className='w-50 mx-auto'>Proin et euismod tellus, et malesuada lectus. Donec velit nisi, aliquet vitae nisi vel, vulputate dictum sem.    Curabitur nec orci ipsum. Proin et ipsum ut libero rhoncus aliquet.</p>
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <Col md>
                            <img className='img-fluid' src="https://image.freepik.com/free-vector/book-your-date-mobile-phone_23-2148552969.jpg" alt="" />
                        </Col>
                        <Col md className='my-auto'>
                            <Form>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter Your Name" required/>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Email" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="date" required/>
                                </Form.Group>
                                <Form.Group>
                                    <FloatingLabel controlId="floatingTextarea" label="Your Message" className="mb-3">
                                      <Form.Control as="textarea" placeholder="Leave a message here" />
                                    </FloatingLabel>
                                </Form.Group>
                              <Button variant="outline-danger" type="submit">
                                Book your appointment
                              </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Booking;