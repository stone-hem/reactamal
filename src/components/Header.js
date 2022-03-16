import React from "react";

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">Amal capital</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
            <Link to="/home" >Home</Link>
            <Link to="/activeprojects" >Activeprojects</Link>
            <Link to="/newprojetcs" >Newprojects</Link>
            <Link to="/myshares" >Myshares</Link>
            <Link to="/login" >Logout</Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;