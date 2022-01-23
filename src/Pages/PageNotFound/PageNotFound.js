import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className='text-center my-5'>
            <img className='img-fluid' src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            <div>
            <Link to='/home'>
                <Button variant='dark'>Go Back</Button>
            </Link>
            </div>
        </div>
    );
};

export default PageNotFound;