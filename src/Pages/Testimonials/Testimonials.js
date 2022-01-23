import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    return (
        <div>
            <Container>
            <Row>
                {
                    testimonials.map((testimonial) => (
                        <Col sm lg={3}>
                            <Card border='info' className="my-3">
                              <Card.Img height='200px' variant="top" src={testimonial.image} />
                              <Card.Body>
                                    <Card.Title>{testimonial.name}</Card.Title>
                                    <Card.Text>{testimonial.info}</Card.Text>
                              </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
        </div>
    );
};

export default Testimonials;