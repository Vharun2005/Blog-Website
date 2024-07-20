import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppBar = () => {
  return (
            <Navbar expand="lg" bg="light" className="shadow p-3 mb-5 bg-body-tertiary rounded" id='absolute'>
            <Container>
            <Navbar.Brand href="#home"><h2><span> <i className="bi bi-amd"></i> Code-Blogs</span></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="/" className='fw-bold fs-5 pe-5'>Home</Nav.Link>
                <Nav.Link href="/about"  className='fw-bold fs-5 pe-5'>About</Nav.Link>
                <Nav.Link href="/contact"  className='fw-bold fs-5 '>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default AppBar