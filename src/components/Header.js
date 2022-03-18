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
            <div  style={{ padding:"20px",wordSpacing: "1 rem" }}>
            <Link to="/login" style={{ padding:"10px",wordSpacing: "0.5 rem" }} >Login</Link>
            <Link to="/register" style={{ padding:"30px",wordSpacing: "1 rem" }}>Register</Link>
            <Link to="/home" style={{ padding:"30px",wordSpacing: "1 rem" }}>Home</Link>
            <Link to="/activeprojects" style={{ padding:"30px",wordSpacing: "1 rem" }}>Activeprojects</Link>
            <Link to="/newprojetcs" style={{ padding:"30px",wordSpacing: "1 rem" }}>Newprojects</Link>
            <Link to="/myshares" style={{ padding:"30px",wordSpacing: "1 rem" }}>Myshares</Link>
            <Link to="/login" style={{ padding:"30px",wordSpacing: "1 rem" }} >Logout</Link>
            </div>
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