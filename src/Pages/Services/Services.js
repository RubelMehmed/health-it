import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <Row>
                {
                    services.map((service) => (
                        <Col sm lg={3}>
                            <Card className="my-3">
                              <Card.Img height='200px' variant="top" src={service.image} />
                              <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.info}</Card.Text>
                              </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Services;