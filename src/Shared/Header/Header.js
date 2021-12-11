import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../pages/hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid >
                <Navbar.Brand href="/" >UDC</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        {/* <Nav.Link href="#action2">Services</Nav.Link> */}
                    </Nav>
                    <Nav className="d-flex">

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        {
                            user?.email ?
                                <Nav.Link href=""><Button onClick={logOut}>Logout</Button></Nav.Link> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;