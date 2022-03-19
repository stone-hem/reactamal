import React,{ useEffect } from "react";

import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
  let history=useNavigate()
  function Logout(){
    localStorage.clear()
    history('/login')
  }

  let userdata=JSON.parse(localStorage.getItem('user'))
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
            {
              localStorage.getItem('user')?
              <>
              <div  style={{ padding:"20px",wordSpacing: "1 rem" }}></div>
               <Link to="/home" style={{ padding:"30px",wordSpacing: "1 rem" }}>Home</Link>
            <Link to="/activeprojects" style={{ padding:"30px",wordSpacing: "1 rem" }}>Activeprojects</Link>
            <Link to="/newprojetcs" style={{ padding:"30px",wordSpacing: "1 rem" }}>Newprojects</Link>
            <Link to="/myshares" style={{ padding:"30px",wordSpacing: "1 rem" }}>Myshares</Link>
            
              </>
              :
              <>
                <div  style={{ padding:"20px",wordSpacing: "1 rem" }}>
            <Link to="/login" style={{ padding:"10px",wordSpacing: "0.5 rem" }} >Login</Link>
            <Link to="/register" style={{ padding:"30px",wordSpacing: "1 rem" }}>Register</Link>
           
            </div>
              </>
 
            }
          
          </Nav>
          {
              localStorage.getItem('user')?
              <>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <NavDropdown title={userdata && userdata.user.name}>
              <NavDropdown.Item onClick={Logout}  >Logout</NavDropdown.Item>
              <NavDropdown.Item > <Link to="/profile"  >Update Profile</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </>
          :null
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;