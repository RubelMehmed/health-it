import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <Container fluid>
                <Row className='bg-warning'>
                    <div className="col-12 col-md-6 my-auto p-3">
                        <h5>Always there to help</h5>
                        <h1 className='text-light'>Dr Joanna Bryan</h1>
                        <p>Vivamus pretium pellentesque vestibulum. In mollis, elit vitae rhoncus pellentesque, arcu quam imperdiet ex, vitae congue tellus turpis sed tortor. Morbi consequat vel dolor quis venenatis. Aenean non interdum purus. Maecenas sem nunc, ullamcorper sit amet nulla quis, porta pharetra velit. Nam eros nisl, consequat sit amet pharetra.</p>
                        <p>Proin congue in neque at mollis. Suspendisse eros nulla, vehicula id sollicitudin ut, feugiat sit amet ligula. Integer posuere purus lorem, id bibendum ante commodo et. Nunc ut quam ut eros accumsan eleifend. Curabitur vitae tristique augue. Morbi vitae semper lorem, id sagittis lectus.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/joanna.jpg" alt="" />
                    </div>
                </Row>
                <Row>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/graph-1200x1200.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-6 my-auto p-3">
                        <h5>A circle of psychology</h5>
                        <h1 className='text-danger'>The process is simple</h1>
                        <p>Vestibulum eget lorem id mauris laoreet vestibulum. Nulla vel nisi suscipit, vehicula sapien condimentum, sollicitudin orci. Aliquam tristique, est eu elementum interdum, orci dolor mattis ex, sit amet sollicitudin nibh velit imperdiet leo. Duis ut bibendum eros. Praesent et est elit. Praesent faucibus eleifend sollicitudin. Maecenas dui tortor, facilisis in gravida et, maximus sed ipsum. Donec neque nisl, lacinia at lacus vitae, faucibus feugiat arcu.</p>
                        <br />
                        <Link to='/service'><button className='btn btn-outline-danger'>View Service</button></Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;