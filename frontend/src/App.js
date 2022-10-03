import React from 'react';
import './App.css';
import Homepage from './Components/homepage.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './Images/ediLogo.png'


function App() {
  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Edignite Logo"
              src={logo}
              width="17"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Edignite NGO
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Places We Go</Nav.Link>
            <Nav.Link href="#pricing">Our Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Homepage></Homepage>
    </>
  );
}

export default App;
