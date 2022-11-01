import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Routes as Switch, Route } from 'react-router-dom';
import logo from './Images/ediLogo.png'
import Homepage from './Components/homepage.js';
import Footer from './Components/footer.js';
import Places from './Components/places.js';


/**
 * @creater "prince verma"
 * @category webpage od Edignite NGO
 * @param {no parms}
 * @returns Entire webpage component
 * @example
 */
function App() {
  return (
    <>
      <Navbar bg="warning" variant="dark" expand="lg">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#place">Place</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" element={<Homepage />} />
        <Route path="/places" element={<Places />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
