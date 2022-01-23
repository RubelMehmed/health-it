import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Visiting = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className='col-12 col-md-6'>
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/book-image.jpg" alt="" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='py-3'>
                            <h1>Come & visit us</h1>
                            <br />
                            <p>But the earth and the memories, and the grid bed. Until he wants to save, or the economic life has been said, from the Olympics it is important. Curabitur nec orci ipsum. As stated above, there is a lot of free travel.</p>
                            <br />
                            <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Select appointment date</Form.Label>
                                <Form.Control type='date' placeholder="name@example.com" required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                    <Link to='/booking'><Button variant="outline-info" type="submit">BOOK YOUR APPOINTMENT</Button></Link>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Visiting;