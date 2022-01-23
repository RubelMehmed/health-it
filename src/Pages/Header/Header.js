import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                    <Navbar.Brand href="#home">Digital Pshychiatrist Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/about">About Doctors Berger</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/service">Services</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/testimonial">Testimonial</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/booking">Book a visit</Nav.Link>
                      {
                        user.email ?
                          <Button onClick={logOut} variant='secondary'>Logout</Button>
                          :
                          <Nav.Link className='text-dark' as={Link} to="/login">Login</Nav.Link>
                      }
                      <Navbar.Text className='mx-1'>
                        {user.displayName}
                      </Navbar.Text>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;