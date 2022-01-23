import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SatisfiedClient = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                <div className='col-12 col-md-6'>
                    <div className='py-5 px-3'>
                        <h5>Satisfied clients support her work</h5>
                        <br />
                        <h1><span className='text-danger'>Happy</span>, not “happy”</h1>
                        <br />
                        <p>Live the price of the porch In the soft, flexible life of the Zen sniper, from which the bow of the  financing No disease or pain any poisonous consequences. Aeneas is not sometimes pure. Maecenas sem nunc, ullamcorper sit amet nulla quis, porta pharetra velit. For the clinical players, the consequences should be fun quiver.</p>
                    </div>
                    <Row className='px-3'>
                        <Col xs={6}>
                            <h5>TALKING ABOUT THE PROBLEM</h5>
                            <p>Donec sollicitudin justo eget tortor porta, id maximus ex facilisis. Integer facilisis pulvinar commodo. Integer sed placerat quam. Praesent dictum velit ut tempor molestie.</p>
                        </Col>
                        <Col xs={6}>
                            <h5>ONGOING DISCUSSION</h5>
                            <p>Mauris dui magna, consectetur nec dignissim ut, pellentesque sit amet nisl. Etiam varius at leo non pulvinar. Curabitur magna nunc, cursus vitae consequat a, gravida non risus.</p>
                        </Col>
                        <Col xs={6}>
                            <h5>ANALYSIS</h5>
                            <p>Morbi eget orci dictum, imperdiet felis in, finibus lorem. Nunc sed ex massa. Vivamus eleifend condimentum orci in dapibus. Praesent ex eros, ullamcorper egestas nulla eget.</p>
                        </Col>
                        <Col xs={6}>
                            <h5>SOLVING THE PROBLEM</h5>
                            <p>Vivamus libero ligula, tincidunt vel venenatis eu, vehicula venenatis purus. Duis at lorem venenatis, mattis nunc sollicitudin.</p>
                        </Col>
                    </Row>
                </div>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/people.jpg" alt="" />
                </div>
            </Row>
            </Container>
        </div>
    );
};

export default SatisfiedClient;