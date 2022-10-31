import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes as Switch, Route } from 'react-router-dom';
import logo from './Images/ediLogo.png'
import Homepage from './Components/homepage.js';
import Footer from './Components/footer.js';
import Places from './Components/places.js';


/**
 * @creater "prince verma"
 * @category component
 * @param {no parms}
 * @returns Returns the routes.
 * @example
 */
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
            />
            Edignite NGO
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Places We Go</Nav.Link>
            <Nav.Link href="#pricing">Our Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/"element = { <Homepage />} />
        <Route path="/places"element = { <Places />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
